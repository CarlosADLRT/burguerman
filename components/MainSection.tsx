import { Box, Container, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const MainSection = () => {
  return (
    <Grid container height="40vh">
      <Grid item sm={6} position="relative" display="block">

        <Image src="https://plus.unsplash.com/premium_photo-1663036906556-584d90b7a6a2" fill objectFit="cover" alt='...'></Image>
      </Grid>
      <Grid item sm={6}>
        <div className="slide-overlay">
          <div className="cookbook-slider-title">
            <h3>Featured Recipes</h3>
          </div>
          <div className="slide-header">
            <h3 className="cookbook-slide-title"><a href="https://demo.wpzoom.com/cookbook/2022/03/13/moscow-mule-cocktail%ef%bf%bc/" tabIndex="0">Moscow Mule Cocktail￼</a></h3>
            <div className="entry-recipe-details">
              <span className="entry-recipe-details_time">10 minutes</span>
              <span className="entry-recipe-details_difficulty">easy</span>
            </div></div><div className="slide-content">
            <p>This is some dummy copy. You’re not really supposed to read this dummy copy, it is just a place holder for people who need some type to visualize what the actual copy might look like if it were real content. All your supporting arguments must […]</p>
          </div>
          <div className="slide-footer">
          </div>
        </div>
      </Grid>
    </Grid>

  )
}

export default MainSection