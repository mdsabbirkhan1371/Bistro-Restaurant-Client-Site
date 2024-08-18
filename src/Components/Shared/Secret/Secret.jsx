const Secret = () => {
  return (
    <div>
      <main class="w-3/4 mx-auto">
        <section>
          <div class="grid grid-cols-3 gap-4 mt-8 justify-center	">
            <div class="bg-slate-400 py-14 rounded">
              <h1 class="text-3xl ps-6 text-white	">Deposit Money</h1>
              <h1 class="text-4xl ps-6 text-white	">$00</h1>
            </div>
            <div class="bg-red-400 py-14 rounded">
              <h1 class="text-3xl ps-6 text-white	">Withdraw Money</h1>
              <h1 class="text-4xl ps-6 text-white	">$120</h1>
            </div>
            <div class="bg-green-500 py-14 rounded">
              <h1 class="text-3xl ps-6 text-white	">Deposit Money</h1>
              <h1 class="text-4xl ps-6 text-white	">$1140</h1>
            </div>
          </div>
          <section>
            <div class="grid grid-col gap-4 mt-8 justify-center">
              <h2 class="text-3xl mt-12 text-center  mb-4">
                let's go to <span class="text-amber-700">shoping!!!</span>
              </h2>
              <button class="bg-yellow-600 text-2xl py-2 px-6 rounded ">
                Buy Now
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Secret;
