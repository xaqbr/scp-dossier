CREATE TABLE article (
    num INTEGER NOT NULL,
    title TEXT NOT NULL DEFAULT "",
    class TEXT NOT NULL,
    thumbnail_url TEXT NOT NULL DEFAULT "",
    content JSONB NOT NULL,
);