"use client";

import { useEffect, useState } from "react";

import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { Promotion } from "@/types/promotion";

export default function addStudent() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    api.get("promotions").then((res) => setPromotions(res.data));
  }, []);

  return (
    <div>
      Ajouter un étudiant
      <form>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="space-y-4">
            <Input label="Prénom" name="firstName" />
            <Input label="Nom" name="lastName" />
          </div>
          <div className="space-y-4">
            <Input label="Date de naissance" name="birthDate" />
            <Input
              label="Promotion"
              name="promotion"
              type="select"
              options={promotions.map(({ name }) => ({
                label: name,
                value: name,
              }))}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button>Ajouter</Button>
        </div>
      </form>
    </div>
  );
}
