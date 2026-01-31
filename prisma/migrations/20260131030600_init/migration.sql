-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "readTime" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requestes" (
    "id" SERIAL NOT NULL,
    "Client_Name" TEXT NOT NULL,
    "Client_Email" TEXT NOT NULL,
    "Client_Message" TEXT NOT NULL,

    CONSTRAINT "Requestes_pkey" PRIMARY KEY ("id")
);
