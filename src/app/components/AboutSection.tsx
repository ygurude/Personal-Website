"use client";
import { useState, useTransition } from "react";
import React from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
    const [tab, setTab] = useState("Skills");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className ="text-white">
            <div className = "md-grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                {/* <Image src=""/> */}
                <div>
                    <h2 className ="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className ="text-base lg:text-lg">
                    I am a third year Computer Engineering Undergraduate Student at Georgia Tech with a focus on Information Internetworks and 
                    Computing Hardware/Emerging Architecture. Experienced in a myriad of software languages and 
                    honed skills through involvement in multiple organizations. Well-versed in engineering programs such as Python, 
                    Java, C, System Verilog, MATLAB, and Assembly Language.

                    Currently seeking Engineering Internships to apply my diverse skill set and contribute to innovative projects.
                    </p>
                    <div className ="flex flex-row mt-8">
                        <span className ="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple">
                            Skills
                        </span>
                        <span>Education</span>
                        <span>Experience</span>
                        <span>Interests</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;