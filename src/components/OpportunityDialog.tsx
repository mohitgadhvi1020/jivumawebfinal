import { Phone } from 'lucide-react';
import { Dialog } from './ui/Dialog';
import { CornerDialog } from './ui/CornerDialog';

interface OpportunityDialogProps {
  isOpen: boolean;
  onClose: () => void;
  showCorner: boolean;
  onCornerClick: () => void;
}

export function OpportunityDialog({ 
  isOpen, 
  onClose, 
  showCorner, 
  onCornerClick 
}: OpportunityDialogProps) {
  return (
    <>
      <Dialog isOpen={isOpen} onClose={onClose}>
        <div className="p-6">
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Business Opportunity!
            </h3>
            <p className="text-gray-600 mb-4">
              We are currently open for distribution and sales positions across regions.
            </p>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-gray-800 font-medium">
                For inquiries, please contact:
              </p>
              <a
                href="tel:9998534321"
                className="text-orange-500 font-semibold text-lg hover:text-orange-600"
              >
                +91 9998534321
              </a>
            </div>
          </div>
        </div>
      </Dialog>

      {showCorner && (
        <CornerDialog onClick={onCornerClick}>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white" />
            <span className="text-sm">Business Opportunity</span>
          </div>
        </CornerDialog>
      )}
    </>
  );
}