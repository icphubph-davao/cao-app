"use client";

import { Separator } from "@/components/ui/separator";

// import Image from "next/image";
// import quality_policy from "../../public/quality-policy.jpg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, Mail, MapPin, Phone } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <div className="text-4xl font-normal">About Us</div>

      <Tabs defaultValue="quality-policy" className="">
        <TabsList className="space-x-4">
          <TabsTrigger value="quality-policy">Quality Policy</TabsTrigger>
          <TabsTrigger value="mission-vision">Mission and Vision</TabsTrigger>
          <TabsTrigger value="contact-us">Contact Us</TabsTrigger>
        </TabsList>

        <TabsContent value="quality-policy">
          <div className="py-4">
            {/* <Image src={quality_policy} alt="" /> */}
            <img src="./quality-policy.jpg" alt="" />
          </div>
        </TabsContent>

        <TabsContent value="mission-vision">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-normal">Mission</div>
              <div className="text-lg">
                Provide accurate accounting and internal audit services for the
                city in accordance with the government accounting and auditing
                manuals.
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-normal">Vision</div>
              <div className="text-lg">
                Envision an application of efficient and effective accounting
                system in a fender sensitive and globally competitive office
                environment and empowerment of the people with great and dynamic
                access of real-time financial statements.
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="contact-us">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-normal">Contact Information</div>
              <div className="flex flex-row gap-2">
                <MapPin />
                Room 27, 3rd Floor, City Hall Building, San Pedro Street, Davao
                City, Davao del Sur
              </div>
              <div className="flex flex-row gap-2">
                <Phone />
                <strong>Main Number:</strong> (241-1000) •{" "}
                <strong>Local Numbers:</strong> <i>Receptionist</i> (251)
                <i>Administrative</i> (252) <i>Financial Mgt</i> (253){" "}
                <i>Accounting</i> (254)
              </div>
              <div className="flex flex-row gap-2">
                <Mail />
                cao@davaocity.gov.ph • caodavao@yahoo.com
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-normal">Site Links</div>
              <div className="flex flex-row gap-2">
                <Link />
                <strong>City System Portal:</strong>{" "}
                https://www.davaocityportal.com
              </div>
              <div className="flex flex-row gap-2">
                <Link />
                <strong>Davao City Website:</strong>{" "}
                https://www.davaocity.gov.ph
              </div>
              <div className="flex flex-row gap-2">
                <Link />
                <strong>Citizen Feedback Form</strong>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
