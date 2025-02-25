import bershka from "./../../../../../assets/bershka.png";
import dkny from "./../../../../../assets/dkny.png";
import hm from "./../../../../../assets/hm.png";
import only from "./../../../../../assets/onnly.png";
import rayban from "./../../../../../assets/rayban-150x75.png";
import zara from "./../../../../../assets/zara-150x75.png";
import mango from "./../../../../../assets/mango-300x114.png";
import selected from "./../../../../../assets/selected-300x106.png";

const OurCustomers = () => {
  return (
    <section className="px-4 min-h-screen  py-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight">OUR CUSTOMERS</h2>
        <p className="text-lg text-muted-foreground">OUR CLIENT LIST</p>
        <p className="text-muted-foreground">
          New the her nor case that lady paid read. Invitation friendship travelling.
          <br />
          Eat everything the out two. Shy you who scarcely expenses debating hastened resolved.
        </p>
      </div>

      {/* Customer Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
        <img src={zara} alt="ZARA" className="h-12 object-contain mx-auto" />
        <img src={only} alt="ONLY" className="h-12 object-contain mx-auto" />
        <img src={bershka} alt="Bershka" className="h-12 object-contain mx-auto" />
        <img src={rayban} alt="Ray-Ban" className="h-12 object-contain mx-auto" />
        <img src={selected} alt="SELECTED HOME" className="h-12 object-contain mx-auto" />
        <img src={hm} alt="H&M" className="h-12 object-contain mx-auto" />
        <img src={dkny} alt="DKNY" className="h-12 object-contain mx-auto" />
        <img src={mango} alt="MANGO" className="h-12 object-contain mx-auto" />
      </div>
    </section>
  );
};

export default OurCustomers;
