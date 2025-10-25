import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";
import { Icons } from "@/components/common/icons";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="grid justify-center max-w-2xl gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-1">
      
        <div
          className="relative p-2 overflow-hidden border rounded-lg bg-background"
        >
          <div className=" gap-8 h-[230px]  rounded-md p-6 sm:h-[230px] text-center items-center justify-center flex flex-col">
            <Icons.diagnostics size={50} />
            <div className="space-y-2">
              <h3 className="font-bold">Qualitätskontrolleur für Zitrusfrüchte</h3>
              <p className="text-sm text-muted-foreground">
                Samagro - Fabrik
              </p>
               2022-2023
            </div>
          </div>
        </div>
    </div>
  );
}
