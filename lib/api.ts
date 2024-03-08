import { Article, SCPObjectClass } from "@/constants/Models";

const apiEndpoint = "https://api.crom.avn.sh/graphql";

const graphqlQuery = `
query Search($url:URL!) {
  page(url: $url) {
    alternateTitles {
      title
    }
    wikidotInfo {
      title
      tags
      thumbnailUrl
      wikidotId
      source
      textContent
    }
  }
}
`;

// fetchArticle downloads a full SCP article from the SCP API database and transforms it into a
// model compatible with SCP: Dossier for rendering in views.
export async function fetchArticle(idx: string): Promise<Article> {
    const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
            query: graphqlQuery,
            variables: { url: `http://scp-wiki.wikidot.com/${idx}` },
        }),
    });

    if (!res.ok) throw new Error("Got status code: " + res.status);

    const resData = await res.json();
    const objClass = resData.data.page.wikidotInfo.tags.find((item: string) =>
        Object.values(SCPObjectClass).includes(item as SCPObjectClass)
    );

    return {
        index: resData.data.page.wikidotInfo.title,
        title: resData.data.page.alternateTitles.length
            ? resData.data.page.alternateTitles[0].title
            : resData.data.page.wikidotInfo.title,
        objectClass: objClass ? objClass : SCPObjectClass.Unknown,
        content: resData.data.page.wikidotInfo.textContent,
        thumbnailUrl: resData.data.page.wikidotInfo.thumbnailUrl,
    };
}
