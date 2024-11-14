-- CreateTable
CREATE TABLE "Book" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255),
    "author" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "createdBy" VARCHAR(20),
    "updatedBy" VARCHAR(20),

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
