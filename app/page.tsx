"use client"

import Section from "@/components/layout/section";
import NavHeader from "@/components/layout/navHeader";
import {useStateContext} from "@/context/stateContext";

export default function Home() {
    const {pricesRef, contactRef} = useStateContext()
    return (
      <div className="flex flex-col">
        <Section background="bg-slate-50">
            <NavHeader/>
        </Section>
        <Section secRef={pricesRef} background="bg-slate-50">
s
        </Section>
        <Section secRef={contactRef} background="bg-slate-50">
s
        </Section>
        <Section background="bg-slate-900">
s
        </Section>
      </div>
  )
}
