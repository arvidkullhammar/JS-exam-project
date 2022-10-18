-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "TeamId" INTEGER NOT NULL,
    "Points" INTEGER NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teams_email_key" ON "Teams"("email");

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_TeamId_fkey" FOREIGN KEY ("TeamId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
