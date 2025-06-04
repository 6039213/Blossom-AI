import { Dialog } from '~/components/ui/Dialog';
import SettingsTab from '~/components/@settings/tabs/settings/SettingsTab';

interface ProjectSettingsPanelProps {
  open: boolean;
  onClose: () => void;
}

export const ProjectSettingsPanel = ({ open, onClose }: ProjectSettingsPanelProps) => {
  return (
    <Dialog open={open} onClose={onClose} onBackdrop={onClose}>
      <div className="p-6 bg-white dark:bg-[#0A0A0A] rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-bolt-elements-textPrimary">Project Settings</h2>
        <SettingsTab />
      </div>
    </Dialog>
  );
};
