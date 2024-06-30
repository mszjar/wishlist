import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const NotConnected = () => {
  return (
    <>
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Attention</AlertTitle>
        <AlertDescription>
          Veuillez connecter votre portefeuille pour continuer.
        </AlertDescription>
      </Alert>
    </>
  )
}

export default NotConnected
