"use client"

import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <div className="text-4xl font-normal">Services</div>
      <div className="flex flex-col gap-4 py-4">

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-normal">Evaluation of Salaries and Wages and other Benefits of City Government Personnel</div>
          <div className="text-lg">
            Processing of Claims (Payrolls/Vouchers) due to officials, officers and employees as
            compensation/salaries to their services rendered to the City Government of Davao
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-normal">Evaluation of Disbursement Vouchers for Supplies, Services and
            Infrastructure Projects</div>
          <div className="text-lg">
            Processing of payment for procurement of properties, supplies and materials,
            gasoline, oil and lubricants, repair and maintenance and others
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-normal">Evaluation of Disbursement Vouchers for Supplies, Services and
            Infrastructure Projects</div>
          <div className="text-lg">
            Processing of payment for procurement of properties, supplies and materials,
            gasoline, oil and lubricants, repair and maintenance and others
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-normal">Preparation of Financial Statement (City Accounts)</div>
          <div className="text-lg">
            Encoding of all city transactions and the generation of the Financial Statements for
            submission to Commission on Audit (COA)
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-normal"> Preparation of Financial Statement (Barangay Accounts)</div>
          <div className="text-lg">
            Encoding of all city transactions and the generation of the Financial Statements for
            submission to Commission on Audit (COA)
          </div>
        </div>

      </div>
    </div>
  );
}
