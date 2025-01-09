import React from 'react';
import { UtensilsCrossed, Phone, Info } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-8 px-4 text-center shadow-lg relative overflow-hidden min-h-[15rem]">

        {/* Left Side Images */}
        <div className="absolute left-0 top-0 h-full w-48 md:w-64">
          <img
            src="https://img.freepik.com/premium-photo/indian-women-cooking-food-kitchen-indian-mother-food-cooking-kitchen_207225-1866.jpg"
            alt="Woman in Kitchen"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-[16rem] top-0 h-full w-48 md:w-64">
          <img
            src="https://img.freepik.com/premium-photo/indian-woman-cooking-food-kitchen-home-traditional-indian-cuisine_1308175-36345.jpg"
            alt="Woman in Kitchen"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-[32rem] top-0 h-full w-48 md:w-64">
          <img
            src="https://img.freepik.com/premium-photo/beautiful-indian-woman-saree-making-food-kitchen_44562-1213.jpg"
            alt="Woman in Kitchen"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Images */}
        <div className="absolute right-0 top-0 h-full w-48 md:w-64">
          <img
            src="https://img.freepik.com/premium-photo/indian-women-cooking-food-kitchen-indian-food-cooking-ai-poster_207225-1787.jpg"
            alt="Woman Cooking"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute right-[16rem] top-0 h-full w-48 md:w-64">
          <img
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bc81f7f2-9a7d-4c6e-a76f-e42b37db7772/a84854c0-6de2-4998-8f73-061cf9eabbb5.png"
            alt="Woman Cooking"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute right-[31rem] top-0 h-full w-48 md:w-64">
          <img
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/812a7b78-343e-46dc-b34a-1ef95f3724a4/a47eeecd-1c6f-4f3b-88d3-d946124455d6.png"
            alt="Woman Cooking"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center mb-4">
            <h1 className="text-5xl font-bold text-center mb-2">Ghar Ka Swad</h1>
            <UtensilsCrossed className="w-8 h-8" />
          </div>
          <p className="text-center ml-4 text-2xl font-bold mt-2">Ghar ka khana Khaye</p>
          <p className="text-center ml-4 text-2xl font-bold mt-2">Ghar ke swad me Khaye</p>
        </div>
      </header>

      {/* Rest of the component remains unchanged */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6 mt-8 text-center">Vegetarian Menu</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-100">
                <th className="border p-3 text-left">Day</th>
                <th className="border p-3 text-left">Lunch</th>
                <th className="border p-3 text-left">Dinner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-orange-50">
                <td className="border p-3 font-medium">Sunday</td>
                <td className="border p-3">Dal, Chawal Fry, Seasonal Sabji, Salad/Raita, Achar</td>
                <td className="border p-3">Paneer Sabji, 8 Poori</td>
              </tr>
              <tr className="hover:bg-orange-50">
                <td className="border p-3 font-medium">Monday</td>
                <td className="border p-3">Dal, Chawal, Seasonal Sabji, Salad, Achar</td>
                <td className="border p-3">5 Rotis, Seasonal Sabji, Sewai</td>
              </tr>
              <tr className="hover:bg-orange-50">
                <td className="border p-3 font-medium">Tuesday</td>
                <td className="border p-3">Dal, Chawal, Aloo Bhujia, Chutney, Papad/Tarua, Achar, Salad</td>
                <td className="border p-3">Dal Fry, 5 Roti</td>
              </tr>
              <tr className="hover:bg-orange-50">
                <td className="border p-3 font-medium">Wednesday</td>
                <td className="border p-3">Dal, Chawal, Seasonal Sabji, Salad, Achar</td>
                <td className="border p-3">5 Rotis, Seasonal Sabji, Bhujia/Chana Fry</td>
              </tr>
              <tr className="hover:bg-orange-50">
                <td className="border p-3 font-medium">Thursday</td>
                <td className="border p-3">Dal, Chawal, Seasonal Sabji, Salad, Achar</td>
                <td className="border p-3">Dal Puri, Sabji, Kheer</td>
              </tr>
              <tr className="hover:bg-orange-50">
                <td className="border p-3 font-medium">Friday</td>
                <td className="border p-3">Dal Fry/Rajma, Jeera Rice, Bhujia, Salad, Achar</td>
                <td className="border p-3">5 Rotis, Seasonal Sabji</td>
              </tr>
              <tr className="hover:bg-orange-50">
                <td className="border p-3 font-medium">Saturday</td>
                <td className="border p-3">Veg-Khichdi, Chokha, Papad, Achar</td>
                <td className="border p-3">5 Roti, Sabji</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Info className="w-6 h-6 text-orange-800 mr-2" />
            <h2 className="text-xl font-bold text-orange-800">Important Information</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-800 mb-2">Pricing</h3>
              <ul className="list-disc list-inside text-orange-900">
                <li>Regular Price: ₹70/Plate</li>
                <li>Monthly Package: ₹3000/30 Days</li>
                <li>Extra Rotis: ₹5/Roti</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-800 mb-2">Notes</h3>
              <p className="text-orange-900">Tiffin service will be closed on festivals.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-800 mb-2">Contact Information</h3>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-600" />
                <span className="text-orange-900">6202744741, 6206792203</span>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-orange-800 mb-2">FSSAI License Number</h3>
              <div className="flex items-center space-x-2">
                <img className='w-12 h-12' src="https://5.imimg.com/data5/SELLER/Default/2020/10/RJ/IE/XY/40094031/fssai-logo-500x500.png" alt="fssai-image" />
                <span className="text-orange-900">30250109118737496</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
