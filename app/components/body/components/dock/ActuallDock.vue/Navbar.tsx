'use client';

import { Dock, DockItem, DockIcon, DockLabel } from '@/app/components/body/components/dock/Dock';
import { HomeIcon, SettingsIcon, UserIcon } from 'lucide-react'; // Assuming you're using lucide-react for icons

export function DockExample() {
  return (
    <Dock>
      <DockItem>
        <DockIcon>
          <HomeIcon className="w-full h-full" />
        </DockIcon>
        <DockLabel>Home</DockLabel>
      </DockItem>

      <DockItem>
        <DockIcon>
          <UserIcon className="w-full h-full" />
        </DockIcon>
        <DockLabel>Profile</DockLabel>
      </DockItem>

      <DockItem>
        <DockIcon>
          <SettingsIcon className="w-full h-full" />
        </DockIcon>
        <DockLabel>Settings</DockLabel>
      </DockItem>
    </Dock>
  );
}