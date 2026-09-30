const myAccount = () => {
  return (
    <main className="p-7">
      <div className="main min-h-screen max-w-4xl mx-auto">
        {/* header section */}
        <div class="bg-white-400 rounded-lg shadow-md p-6 mb-6">
          <h1 class="text-4xl  ttext-gray-800 mb-2 mt-4">My Account</h1>
          <p class="text-gray-600">Manage your profile and account settings</p>
        </div>

        {/* profile pic and acc info form*/}
        {/* iska matlab md >= wali screens mai 2 grid columns elese 1 column in shot mobile screen pe 1 column else  2 col  */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* profile pic section*/}
          <div className="bg-white-400 rounded-lg shadow-md p-5 h-fit flex flex-col items-center ">
            <h1 className="text-2xl font-bold w-fit">Profile Picture</h1>
            <div className="avatar border-5 border-gray-200 h-40 w-40 flex items-center justify-center mt-5 rounded-lg text-center">
              <p>Profile Picture</p>
            </div>
            <div className="input-section">
              <label
                htmlFor="profile-picture"
                className="mt-4 inline-block cursor-pointer rounded-md bg-blue-50 px-4 py-2 text-blue-800 font-bold hover:bg-blue-300 transition-colors duration-500"
              >
                Choose file
              </label>
              <input id="profile-picture" className="hidden" type="file" accept="image/*" />
            </div>
            <button className=" bg-blue-600 px-4 py-2 mt-5 text-white hover:bg-blue-700 border rounded-lg p-3 max-w-xl mx-auto transition-colors duration-200">Upload Picture</button>
          </div>

          {/* Account info form section */}
          <div className="bg-white-400 rounded-lg shadow-md p-5 ">
            <h1 className="text-2xl font-bold w-fit">Account Information</h1>
            <form action="" className="flex flex-col">
              <label htmlFor="full-name" className="mt-2 text-sm text-gray-700">Full name</label>
              <input type="text" name="" id="full-name" className="mt-2 border border-gray-200 rounded-lg p-2" />

              <label htmlFor="email" className="mt-2 text-sm text-gray-700">Email Address</label>
              <input type="email" name="email" id="email" readOnly className="mt-2 border border-gray-200 rounded-lg bg-gray-100 p-2" />
              <label htmlFor="email" className="mt-2 text-sm text-gray-400">Email can't be changed</label>

              <label htmlFor="contact" className="mt-5 text-sm text-gray-700">Contact Number</label>
              <input type="number" name="" id="contact" placeholder="+91 1234567890" className="mt-2 border border-gray-200 rounded-lg p-2" />

            </form>

            <hr className="mt-4 text-gray-200" />
            <h1 className="text-xl mt-5 font-bold ">Address Details</h1>
            <form action="" className="flex flex-col">
              <label htmlFor="full-name" className="mt-2 text-sm text-gray-700">Street Address</label>
              <input type="text" name="" id="full-name" placeholder="123 main street" className="mt-2 border border-gray-200 rounded-lg p-2" />


              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-5">
                <div className="flex flex-col">
                  <label htmlFor="city" className="mt-2 text-sm text-gray-700">City</label>
                  <input type="text" name="" id="city" placeholder="Jaipur" className="mt-2 border border-gray-200 rounded-lg p-2" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="state" className="mt-2 text-sm text-gray-700">State/Province</label>
                  <input type="text" name="" id="state" placeholder="Rajasthan" className="mt-2 border border-gray-200 rounded-lg p-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-2">
                <div className="flex flex-col">
                  <label htmlFor="zip-code" className="mt-2 text-sm text-gray-700">Zip/postal code</label>
                  <input type="text" name="" id="zip-code" placeholder="Jaipur" className="mt-2 border border-gray-200 rounded-lg p-2" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Country" className="mt-2 text-sm text-gray-700">Country</label>
                  <input type="text" name="" id="Country" placeholder="India" className="mt-2 border border-gray-200 rounded-lg p-2" />
                </div>
              </div>
              <button className=" bg-blue-600 px-4 py-2 mt-5 text-white hover:bg-blue-700 border rounded-lg p-3 max-w-xl mx-auto transition-colors duration-200">Save Changes</button>



            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default myAccount