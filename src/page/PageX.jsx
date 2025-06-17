import React from 'react';
import Header from '../components/Header';
import { Typography, Card, CardContent, Paper, Box } from '@mui/material';
import { FileText } from 'lucide-react';


const PageX = ({ number }) => {
  console.log("Rendering the page ", number);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-6 py-10">
        <div className='max-w-5xl mx-auto'>
          {/* Page Number Display */}
          <Box className="mb-6 tet-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Typography variant="h3" className="text-blue-600 font-bold">
                {number}
              </Typography>
            </div>
          </Box>
          <div className='flex items-center justify-center'>
            <Typography variant="h6" className="text-gray-600 max-w-4xl mx-auto">
              Welcome to your protected content area. This demonstrates secure routing and session management.
            </Typography>
          </div>
        </div>


        <div className='grid lg:grid-cols-2 gap-8 mt-5'>
          {/* Left Card */}
          <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent >
              <Box className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <Typography variant="h5" className="font-bold text-gray-800">
                    Page Content
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    Protected area {number}
                  </Typography>
                </div>
              </Box>

              <Typography variant="body1" className="text-gray-700 mb-8 leading-relaxed text-lg" sx={{ textAlign: 'justify' }}>
                This is the protected content for Page {number}. You can only access this page because you are
                authenticated. All Page are secured with authentication middleware. Returns to your last Page you access last time after Login.
              </Typography>
            </CardContent>
          </Card>

          {/* Right Card */}
          <div className='space-y-6'>
            <Card className="shadow-lg border-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <Typography variant="h5" className="mb-4" sx={{ fontWeight: 500 }}>
                  Page Statistics
                </Typography>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">Current Page</span>
                    <span className="font-bold text-2xl">{number}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">Total Pages</span>
                    <span className="font-bold text-2xl">10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">Progress</span>
                    <span className="font-bold text-2xl">{Math.round((number / 10) * 100)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageX;
