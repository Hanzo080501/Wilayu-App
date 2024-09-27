import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Mobilenav from '@/Components/Mobilenav';

const Mainlayout = ({ auth, children }) => {
  // console.log('auth', auth);
  return (
    <div>
      <Navbar auth={auth} />
      <main className="transition duration-500 transform bg-gray-100 dark:bg-gray-900">
        {children}
      </main>
      <Footer />
      <div className="flex-grow">
        <div className="block md:hidden">
          {/* Hanya muncul di layar mobile */}
          <Mobilenav auth={auth} />
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;

// import React from 'react';
// import Navbar from '@/Components/Navbar';
// import Footer from '@/Components/Footer';
// import Mobilenav from '@/Components/Mobilenav';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// const Mainlayout = ({ auth, children }) => {
//   return (
//     <TransitionGroup>
//       <CSSTransition key={window.location.pathname} timeout={500} classNames="fade">
//         <div>
//           <Navbar auth={auth} />
//           <main>{children}</main>
//           <Footer />
//           <div className="flex-grow">
//             <div className="block md:hidden">
//               <Mobilenav auth={auth} />
//             </div>
//           </div>
//         </div>

//     </TransitionGroup>
//   );
// };

// export default Mainlayout;
