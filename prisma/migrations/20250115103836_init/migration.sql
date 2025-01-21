-- CreateTable
CREATE TABLE "Holiday" (
    "leave_id" SERIAL NOT NULL,
    "leave_type" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "Holiday_pkey" PRIMARY KEY ("leave_id")
);

-- AddForeignKey
ALTER TABLE "Holiday" ADD CONSTRAINT "Holiday_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
