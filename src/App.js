import React, { useState } from 'react';
import Nested from './components/Nested-Route';
import Condition from './components/Conditional-Renadring'

const App = () => {
  const [familiar, setFamiliar] = useState(false)
  const handleToggle = () => {
    setFamiliar(!familiar)
  }
  return (
    <div>
      <Nested />
      <Condition handleToggle={handleToggle} familiar={familiar} />
    </div>
  );
};

export default App;