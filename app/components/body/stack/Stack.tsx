"use client";
import { useState } from "react";
import nextjs from "../../../../public/stack_icons/nextjs-fill-svgrepo-com.svg";
import vuejs from "../../../../public/stack_icons/vue-9-logo-svgrepo-com.svg";
import mongodb from "../../../../public/stack_icons/mongodb-logo-svgrepo-com.svg";
import mysql from "../../../../public/stack_icons/mysql-logo-svgrepo-com.svg";
import sequelize from "../../../../public/stack_icons/sequelize-svgrepo-com.svg";
import blender from "../../../../public/stack_icons/blender-svgrepo-com.svg";
import figma from "../../../../public/stack_icons/figma-svgrepo-com.svg";
import framer from "../../../../public/stack_icons/framer-svgrepo-com.svg";
import prisma from "../../../../public/stack_icons/prisma-svgrepo-com.svg";
import Image from "next/image";

const frameworks = [nextjs, vuejs, prisma, sequelize];
const designs = [blender, figma, framer];
const databases = [mongodb, mysql];

const Stack = () => {
  const [framework, setFrameworks] = useState<any>(frameworks);
  const [design, setDesigns] = useState<any>(designs);
  const [database, setDatabase] = useState<any>(databases);
  return (
    <div>
      <table>
        <thead className="">
          <tr>
            <th>Framework</th>
            <th>Design</th>
            <th>Database</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {" "}
              <div>
                {framework.map((item: any) => (
                  <Image src={item} height={40} width={40} alt="stack" />
                ))}
              </div>
            </td>
            <td>
              {" "}
              <div>
                {design.map((item: any) => (
                  <Image src={item} height={40} width={40} alt="stack" />
                ))}
              </div>
            </td>
            <td>
              {" "}
              <div>
                {database.map((item: any) => (
                  <Image src={item} height={40} width={40} alt="stack" />
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stack;
