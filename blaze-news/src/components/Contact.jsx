export const Contact = () => {
  //try creating a popup on submit button
  //create a login logout switch and a login page.
  return (
    <>
      <div className="py-28 px-4 mx-10 lg:px-42 md:px-40 sm:px-36">
        <h1 className="text-center py-6 text-3xl font-semibold  text-blue-300">
          We would love to hear from you!
        </h1>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered input-primary w-full max-w-full rounded-lg m-1"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-full rounded-lg m-1"
        />        
        <textarea className="textarea textarea-bordered w-full m-1 rounded-lg" placeholder="Please type here..."></textarea>
        <button className="tn btn-active btn-primary font-bold btn-md sm:btn-md md:btn-md lg:btn-md rounded-lg mx-1">Submit</button>
      </div>      
    </>
  );
};
