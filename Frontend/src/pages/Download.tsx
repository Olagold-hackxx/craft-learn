import Button from "../components/Button";

const CertificateCard = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-100">
      <div className="bg-[#F9F9F7] shadow-lg rounded-xl p-8 text-center w-[30vw]">
        <h2 className="text-2xl font-dmsans text-font-sec font-bold">Congratulations</h2>
        <p className="text-gray-600 mt-2">
          You've successfully completed the <br /> <strong>Bead Making Assessment</strong>.
        </p>

        {/* Certificate Image */}
        <div className="flex justify-center my-4">
          <img
            src="/certificate.png"
            alt="Certificate"
            className="w-32 h-24 rounded-md "
          />
        </div>

        <p className="text-gray-700 mb-4">Your Certification is Ready!</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <div>
            <Button color={"bg-white"} text={"Download Certificate"} />
            </div>
            <div>
            <Button text={"Mint Certificate"} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
