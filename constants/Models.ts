export type ArticleIndex = Omit<Article, "content">;

export type Article = {
    title: string;
    number: number;
    objectClass: SCPObjectClass;
    thumbnailUrl: string;
    content: ArticleSection[];
};

export type ArticleSection =
    | ArticleSectionContainmentProcedures
    | ArticleSectionDescription
    | ArticleSectionAddendum
    | ArticleSectionAbstract;

export enum ArticleSectionType {
    ContainmentProcedures = "containmentProcedures", // Special containment procedures at the beginning of mostly every article. Only one.
    Description = "description", // Text after special containment procedures. Only one.
    Abstract = "abstract", // For unknown sections with a title that couldn't be parsed by any other type.
    Addendum = "addendum", // Usually after description, includes test logs, interviews, etc. Can be multiple.
}

export type ArticleSectionContainmentProcedures = {
    type: ArticleSectionType.ContainmentProcedures;
    text: string[];
};

export type ArticleSectionDescription = {
    type: ArticleSectionType.Description;
    text: string[];
};

export type ArticleSectionAbstract = {
    type: ArticleSectionType.Abstract;
    title: string;
    text: string[];
};

export type ArticleSectionAddendum = {
    type: ArticleSectionType.Addendum;
    title: string;
    text: string[];
};

export enum SCPObjectClass {
    Safe = "safe",
    Euclid = "euclid",
    Keter = "keter",
    Unknown = "unknown",
}
