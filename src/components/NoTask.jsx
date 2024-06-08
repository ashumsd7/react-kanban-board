import React from 'react'

function NoTask({text}) {
  return (
    <div className="flex flex-col gap-4 items-center">
    <img width={'100'} height={'100'} src="https://static.vecteezy.com/system/resources/thumbnails/010/856/652/small/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg" />
    <h4 className="">{text || "You have completed all tesks!!"}</h4>
  </div>
  )
}

export default NoTask