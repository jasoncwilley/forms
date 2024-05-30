import dynamic from 'next/dynamic';

const FormContainer = dynamic(() => import('../components/FormContainer'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div>
      <FormContainer />
    </div>
  );
};

export default HomePage;

