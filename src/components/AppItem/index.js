import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {appId, appName, imageUrl, category} = AppDetails
  return (
    <li className="list-App-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
