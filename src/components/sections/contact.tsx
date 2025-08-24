"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-[9999]">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contact Form</CardTitle>
            <CardDescription>
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Get In Touch</CardTitle>
            <CardDescription>
              Feel free to reach out through any of these channels. I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <div>
                <p className="font-semibold">Email</p>
                <a 
                  href={`mailto:${config.email}`}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  {config.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-semibold">Phone</p>
                <a 
                  href="tel:+918210113139"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500"
                >
                  +91 8210113139
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Github className="w-5 h-5 text-gray-800 dark:text-white" />
              <div>
                <p className="font-semibold">GitHub</p>
                <a 
                  href="https://github.com/Niket224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white flex items-center"
                >
                  github.com/Niket224
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/niket-kumar-iiita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center"
                >
                  linkedin.com/in/niket-kumar-iiita
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Competitive Programming</h4>
              <div className="space-y-2">
                <a 
                  href="https://leetcode.com/u/niket224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 flex items-center"
                >
                  LeetCode Profile
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a 
                  href="https://codeforces.com/profile/Niket2304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 flex items-center"
                >
                  Codeforces Profile
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
