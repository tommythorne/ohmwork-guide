"use client";
import ModuleTemplate from "../../components/ModuleTemplate";
import content from "./content";
export default function Module01Page() {
  return <ModuleTemplate {...(content as any)} />;
}
