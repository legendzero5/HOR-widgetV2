

import BookingWidget from './components/BookingWidget'
import './styles/globals.css'

interface AppProps {
  propertyId: string | null;
}
function App({ propertyId }: AppProps) {

  return (
    <>
      <BookingWidget propertyId={propertyId} />
    </>
  )
}

export default App
