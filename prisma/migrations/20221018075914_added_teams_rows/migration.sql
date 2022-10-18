/*
  Warnings:

  - Added the required column `Abr` to the `Teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Admin` to the `Teams` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Teams` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Teams" ADD COLUMN     "Abr" TEXT NOT NULL,
ADD COLUMN     "Admin" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
