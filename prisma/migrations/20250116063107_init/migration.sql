-- CreateTable
CREATE TABLE "Project" (
    "p_id" SERIAL NOT NULL,
    "p_name" TEXT NOT NULL,
    "p_status" TEXT NOT NULL,
    "p_budget" TEXT NOT NULL,
    "p_deadline" TIMESTAMP(3) NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "status" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("p_id")
);
