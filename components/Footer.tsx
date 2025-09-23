import React, { useState } from 'react';
import { SOCIAL_LINKS, ExternalLinkIcon } from '../constants';

const EmailPopup: React.FC<{ link: { name: string; url: string; } }> = ({ link }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    
    const emailAddress = link.url.replace('mailto:', '');

    const handleCopy = () => {
        if (copied) return;

        const copyToClipboard = (text: string): Promise<void> => {
            // Use modern clipboard API if available and in a secure context
            if (navigator.clipboard) {
                return navigator.clipboard.writeText(text);
            }
            
            // Fallback for older browsers
            return new Promise((resolve, reject) => {
                const textArea = document.createElement('textarea');
                textArea.value = text;

                // Make the textarea invisible
                textArea.style.position = 'absolute';
                textArea.style.left = '-9999px';
                
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    const successful = document.execCommand('copy');
                    if (successful) {
                        resolve();
                    } else {
                        reject(new Error('Failed to copy text.'));
                    }
                } catch (err) {
                    reject(err);
                } finally {
                    document.body.removeChild(textArea);
                }
            });
        };

        copyToClipboard(emailAddress).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        }).catch(err => {
            console.error('Could not copy email to clipboard: ', err);
        });
    };

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsPopupOpen(true)}
            onMouseLeave={() => {
                setIsPopupOpen(false);
                setCopied(false);
            }}
        >
            <button
                onClick={handleCopy}
                className="text-grey hover:text-white transition-colors duration-300 flex items-center space-x-1.5"
                aria-haspopup="true"
                aria-expanded={isPopupOpen}
                aria-label="Copiar e-mail"
            >
                <span>{link.name}</span>
            </button>
            {isPopupOpen && (
                <div
                    ref={null}
                    role="tooltip"
                    className="absolute bottom-full mb-3 w-max bg-black-700 text-white text-base rounded-lg shadow-lg z-10 left-1/2 -translate-x-1/2 animate-fade-in"
                >
                    <div className="px-4 py-2 cursor-pointer rounded-lg" onClick={handleCopy}>
                        {copied ? 'Copiado!' : emailAddress}
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black-700"></div>
                </div>
            )}
        </div>
    );
};


const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-black-700">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-grey text-sm">© Rodrigo Gouveia Estevão</p>
        <div className="flex items-center space-x-6">
          {SOCIAL_LINKS.map((link) => (
            link.name === 'E-mail' ? (
                <EmailPopup key={link.name} link={link} />
            ) : (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey hover:text-white transition-colors duration-300 flex items-center space-x-1.5"
                >
                  <span>{link.name}</span>
                  <ExternalLinkIcon className="opacity-70"/>
                </a>
            )
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;