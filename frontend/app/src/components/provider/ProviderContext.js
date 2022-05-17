import {createContext} from "react";

// const providerContext = React.createContext({
//     providerDemographics: null,
//     setProviderDemos: (demographics) => {},
//     providerPatients: null,
//     setProviderPatients: (patientIDs) => {}
// });

const providerContext = createContext();

export default providerContext;