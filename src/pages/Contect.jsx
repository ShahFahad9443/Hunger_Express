import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  MessageSquare,
  Camera,
  Briefcase,
  Send,
  User,
  AtSign,
  Type,
} from "lucide-react";

const Contect = () => {
  return (
    <div className="bg-gray-200 py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12 pt-10">
          <h2 className="text-4xl font-bold text-red-600 mb-2">Reach Out</h2>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Card: Connect With Us */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-red-600 font-bold text-xl mb-6 flex items-center gap-2">
              <MessageSquare size={22} /> Connect With Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700 group">
                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-500 transition-colors">
                  <Phone
                    size={20}
                    className="text-blue-500 group-hover:text-white"
                  />
                </div>
                <span className="font-semibold">+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 group">
                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-500 transition-colors">
                  <Mail
                    size={20}
                    className="text-blue-500 group-hover:text-white"
                  />
                </div>
                <span className="font-semibold text-black-600 hover:underline cursor-pointer">
                  infoport@fungexpress.com
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 group">
                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-500 transition-colors">
                  <MapPin
                    size={20}
                    className="text-blue-500 group-hover:text-white"
                  />
                </div>
                <span className="font-semibold">
                  456 Elm Street, Foodville, CA
                </span>
              </div>
            </div>
          </div>

          {/* Right Card: Store Hours */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-red-600 font-bold text-xl">
                  Operating Schedule
                </h3>
                <Clock className="text-red-600" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Mon-Fri</span>
                  <span className="text-gray-900">10AM - 8PM</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium border-t border-gray-50 pt-2">
                  <span>Sat</span>
                  <span className="text-gray-900">11AM - 7PM</span>
                </div>
                <div className="flex justify-between text-red-700 font-medium border-t border-gray-50 pt-2">
                  <span>Sun</span>
                  <span className="text-red-700">10AM - 6PM</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
              <div className="flex gap-3">
                {[MessageSquare, Camera, Briefcase].map((Icon, i) => (
                  <div
                    key={i}
                    className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  >
                    <Icon size={18} className="text-gray-700" />
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Globe
                  size={18}
                  className="text-gray-400 hover:text-blue-500 cursor-pointer"
                />
                <Clock
                  size={18}
                  className="text-gray-400 hover:text-green-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Form Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white">
          <div className="bg-red-600 p-5 text-white">
            <h3 className="text-3xl font-bold">Send us a Message</h3>
            <p className="text-red-100 mt-2 text-sm">
              We will get back to you within 24 hours.
            </p>
          </div>

          <form className="p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="">
                <label
                  className="text-s uppercase font-bold text-gray-500 mb-2 
                   "
                >
                  Your Full Name
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 "
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="john "
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-gray-300 focus:border-red-500 outline-none transition-all  shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="">
                <label className="text-s uppercase  font-bold text-gray-500 mb-2 block  ">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <AtSign
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 "
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-gray-300 focus:border-red-500 outline-none transition-all shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Subject Input */}
            <div className="relative group">
              <label
                className="text-s uppercase  font-bold text-gray-500 mb-2 block 
               "
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Type
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 "
                  size={18}
                />
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-gray-300 focus:border-red-500 outline-none transition-all shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="relative group">
              <label className="text-s uppercase  font-bold text-gray-500 mb-2 block ">
                Detailed Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Type your message here..."
                className="w-full p-6 rounded-2xl bg-white border-2 border-gray-300 focus:border-red-500 outline-none transition-all shadow-sm resize-none"
                required
              ></textarea>
            </div>

            {/* Premium Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full group bg-red-600 hover:bg-gray-900 text-white font-bold text-xl py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 active:scale-95"
              >
                <span>SEND MESSAGE NOW</span>
                <Send
                  size={20}
                  className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-200 rounded-[1rem]  overflow-hidden border border-gray-300 mt-9 shadow-2xl duration-300">
          <dev className="hover:text-red-600 ">
            <h1 className="pt-4 px-5 font-bold text-xl">
              Frequently Asked Questions
            </h1>
          </dev>
          <dev className="text-gray-600 hover:text-gray-800">
            <h1 className="pt-6 px-5 font-bold text-l hover:text-red-600">
              How Much Time Delivery Will Take?
            </h1>
            <p className="pt-2 px-5 ">
              Typically 30 Minutes to 1 Hour depand on the location between you
              and restaurent.
            </p>
          </dev>
          <dev className="text-gray-600 hover:text-gray-800 hover:bg-red-600">
            <h1 className="pt-6 px-5 font-bold text-l hover:text-red-600">
              What Method You Accept For Payment?
            </h1>
            <p className="pt-2 px-5">
              We accept cash on delivery and credit card.
            </p>
          </dev>

          <dev className="text-gray-600 hover:text-gray-800">
            <h1 className="pt-6 px-5 font-bold text-l hover:text-red-600">
              Could I Cancel Order?
            </h1>
            <p className="pt-2 px-5">
              Yes, you can cancel your order by using the app.
            </p>
          </dev>
        </div>
      </div>
    </div>
  );
};

export default Contect;