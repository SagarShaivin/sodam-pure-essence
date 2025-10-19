import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import productTadka1008 from '@/assets/product-tadka-1008.png';
import { Download, Loader2 } from 'lucide-react';

const ProcessImages = () => {
  const [processing, setProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleProcess = async () => {
    setProcessing(true);
    try {
      // Fetch the image
      const response = await fetch(productTadka1008);
      const blob = await response.blob();
      
      // Load as image element
      const img = await loadImage(blob);
      
      // Remove background
      const resultBlob = await removeBackground(img);
      
      // Create URL for display and download
      const url = URL.createObjectURL(resultBlob);
      setProcessedImage(url);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to process image. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    
    const a = document.createElement('a');
    a.href = processedImage;
    a.download = 'product-tadka-1008-no-bg.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-display font-bold text-center mb-8">
          Product Image Background Remover
        </h1>
        
        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Original Image</h2>
              <div className="bg-muted/30 p-4 rounded-lg">
                <img 
                  src={productTadka1008} 
                  alt="Original product" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                onClick={handleProcess}
                disabled={processing}
                size="lg"
                className="gap-2"
              >
                {processing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Remove Background'
                )}
              </Button>
            </div>

            {processedImage && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Processed Image (Transparent Background)</h2>
                <div className="bg-muted/30 p-4 rounded-lg mb-4">
                  <img 
                    src={processedImage} 
                    alt="Processed product" 
                    className="w-full max-w-md mx-auto"
                  />
                </div>
                <div className="flex justify-center">
                  <Button 
                    onClick={handleDownload}
                    variant="default"
                    size="lg"
                    className="gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download PNG
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="mt-8 text-center text-muted-foreground">
          <p>After downloading, replace the image file at <code className="bg-muted px-2 py-1 rounded">src/assets/product-tadka-1008.png</code></p>
        </div>
      </div>
    </div>
  );
};

export default ProcessImages;
