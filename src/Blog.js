import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import cover from "./images/blogImages/cover.jpg";
import countries from "./images/blogImages/countries.png";
import mt_tambora_temp_diff from "./images/blogImages/Mt Tambora Temp Diff.png";
import arima_rmse from "./images/blogImages/ARIMA RMSE.png";
import coldest_city_temp_predictions from "./images/blogImages/Coldest City Temp Predictions.png";
import coldest_country_temp_predictions from "./images/blogImages/Coldest Country Temp Predictions.png";
import el_nino_northern_states from "./images/blogImages/El Nino Northern States.png";
import el_nino_southern_states from "./images/blogImages/El Nino Southern States.png";
import high_and_low_tax_country_predictions from "./images/blogImages/High and Low Tax Country Predictions.png";
import high_temp_change_country_predictions from "./images/blogImages/High Temp Change Country Predictions.png";
import hottest_city_temp_predictions from "./images/blogImages/Hottest City Temp Predictions.png";
import hottest_country_temp_predictions from "./images/blogImages/Hottest Country Temp Predictions.png";
import la_nina_northern_states from "./images/blogImages/La Nina Northern States.png";
import la_nina_southern_states from "./images/blogImages/La Nina Southern States.png";
import mt_pinatubo_global_temp from "./images/blogImages/Mt Pinatubo Global Temp.png";
import mt_pinatubo_temp_difference from "./images/blogImages/Mt Pinatubo Temp Difference.png";
import mt_tambora_ne_us from "./images/blogImages/Mt Tambora NE US.png";
import mt_tambora_west_europe from "./images/blogImages/Mt Tambora West Europe.png";
import northern_hemisphere_temp from "./images/blogImages/Northern Hemisphere Temp.png";
import prophet_rmse from "./images/blogImages/Prophet RMSE.png";
import country_temp_change from "./images/blogImages/country_temp_change.png";
import country_list_temp_change from "./images/blogImages/country_list_temp_change.png";
import country_slope_intercept from "./images/blogImages/country_slope_intercept.png";
import country_slope_intercept_1743 from "./images/blogImages/country_slope_intercept_1743.png";
import tax_rev_usd_europe from "./images/blogImages/tax_rev_usd_europe.png";
import temp_delta_tax_rev_usd from "./images/blogImages/temp_delta_tax_rev_usd.png";
import tax_rev_usd_bin from "./images/blogImages/tax_rev_usd_bin.png";
import tax_rev_gdp_list from "./images/blogImages/tax_rev_gdp_list.png";
import highest_tax_rev_gdp from "./images/blogImages/highest_tax_rev_gdp.png";
import temp_delta_tax_rev_gdp from "./images/blogImages/temp_delta_tax_rev_gdp.png";
import temp_delta_capitalist from "./images/blogImages/temp_delta_capitalist.png";
import global_average_temperature_over_time from "./images/blogImages/global_average_temperature_over_time.png";
import decadal_average_temp_international_cities from "./images/blogImages/decadal_average_temp_international_cities.png";
import year_period_avg_cities_us from "./images/blogImages/25_year_period_avg_cities_us.png";
import decadal_average_temp_countries_high_tax from "./images/blogImages/decadal_average_temp_countries_high_tax.png";
import state_avg_temp_trend from "./images/blogImages/state_avg_temp_trend.png"

export const Blog = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Box
				maxWidth={"900px"}
				minWidth={"0"}
				display="flex"
				alignItems="left"
				flexDirection={"column"}
				gap={2}
				p={3}
				margin={2}
			>
				<div>
					<Typography variant="overline">
						Earth Surface Temperature
					</Typography>
					<Typography variant="h3">
						Trends in Temperature: Decoding Climate Data
					</Typography>
				</div>
				<img src={cover}></img>
				<Typography variant="caption">
					Photo by Markus Spiske from Pexels:
					https://www.pexels.com/photo/earth-blue-banner-sign-3039036/
				</Typography>
				<Typography variant="subtitle1">
					by: Lea Emerlyn, Leven Cai, Derek Chen
				</Typography>
				<Divider />
				<Typography variant="h5">
					<b>Introduction</b>
				</Typography>
				<Typography variant="h6">Where Our Data Comes From</Typography>
				<Typography>
					Our dataset collectively comes from several major sources:
					The first one comes from Berkeley Earth on Kaggle, and this
					contains information such as temperature data beginning from
					the 1750s and ending in the 2010s. The Berkeley Earth
					dataset contains five CSV files, which includes climate data
					points observed in cities, countries, and states in the U.S.
					The majority of our analysis will be anchored by the data
					from Berkeley Earth.
				</Typography>
				<Typography>
					The next source of our data comes from Data Pandas and the
					Global Revenue Statistics Database, which contains
					information on a country’s capitalistic index, tax revenue,
					and GDP. This serves as the foundational dataset for our
					analysis on understanding how human factors and
					interventions correlate with a country’s climate.
				</Typography>
				<Typography>
					For analyzing the effects non-human factors (ie. natural
					phenomena) have on a country’s climate, we turned to the
					National Oceanic and Atmospheric Administration (NOAA) to
					characterize the periods of El Nino and La Nina. We were
					interested in studying how these two opposing climate
					patterns influence a country’s observed temperature, so we
					relied on NOAA to provide us with the historical record of
					when El Nino and La Nina periods occurred.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>
				<Typography variant="h6"> Our Narrative </Typography>
				<Typography>
					Our blog post is divided into four main sections. The first
					section is our exploratory data analysis, where we present
					introductory analysis by plotting the temperatures of cities
					and countries. We end our exploration with t-SNE
					representations of our data in a low-dimensional space using
					k-means clustering of cities and countries.
				</Typography>
				<Typography>
					In the second and third sections, we walk through the
					journey of analyzing the climate dataset through the lens of
					two different perspectives: the first will be looking at
					human factors and the second will be looking at non-human
					factors.
				</Typography>
				<Typography>
					The human factors we study are a country’s absolute tax
					revenue, tax revenue in relation to GDP, and country’s
					capitalistic index. The main questions we intend to answer
					is the following: How are these three human factors
					correlated with a country’s observed temperature? How
					strongly correlated are each of these three factors with a
					country’s temperature?
				</Typography>
				<Typography>
					For the non-human factors, primarily naturally occurring
					phenomena, we look at events in the historical record to
					analyze how these climate events changed the trajectory of a
					country’s temperature. Specifically, we look at two
					different case studies. First, we study the Mt. Tambora
					volcano eruption in 1815 and the Mt. Pinatubo eruption in
					1991. Then, we study the El Nino and La Nina climate
					patterns from the Pacific Ocean. In both case studies, we
					aim to investigate the following question: How do these
					climate events and patterns change a country’s temperature
					trajectory?
				</Typography>
				<Typography>
					Finally, in our last section, we perform a time-series
					analysis and we create a forecasting model using our climate
					data which spans across 250 years. We create a model using
					two approaches, the first is a Seasonal ARIMA and the second
					is using Meta Research’s Prophet package. Our model predicts
					a city’s or country’s future temperatures, then we analyze
					our model’s accuracy using root mean squared errors.
				</Typography>
				<Typography>
					With all this in mind, let’s dive into our data-driven
					analytical journey!
				</Typography>

				<Divider sx={{ opacity: 0, padding: "24px" }}></Divider>
				<Typography variant="h5">
					<b>Exploratory Data Analysis</b>
				</Typography>
				<Typography variant="h6"> General EDA </Typography>
				<img src={global_average_temperature_over_time}></img>
				<Typography variant="caption">
					Plotting the 25-year period rolling average between the
					1750s to 2010s demonstrates there exists a general upward
					trend in global average temperatures.
				</Typography>
				<Typography>
					To begin our exploratory data analysis, we’re going to first
					perform sanity checks on our dataset to ensure our data
					cleaning process was successful. Since we’re interested in
					observing whether or not overall trends in the climate
					exist, we can naturally plot the yearly average temperature
					between the 1750s and the 2010s. Furthermore, we’re
					interested in the general trend, so we can plot a 25-year
					period rolling average alongside the year-to-year average
					temperatures. Our plot demonstrates that there exists an
					upward trend where the global average temperature has been
					increasing over the past two centuries.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>
				<Typography variant="h6">Cities </Typography>
				<img src={decadal_average_temp_international_cities}></img>
				<Typography variant="caption">
					Plotting selected international cities shows the diverse
					climates different cities experience throughout the decades.
				</Typography>
				<Typography>
					In our climate dataset, we have extracted temperature data
					for cities, so let’s take a closer look at how temperatures
					differ across various international cities. We selected a
					diverse subset of cities to represent various regions of the
					world, ranging from North America to Europe to Asia. As the
					line plot suggests, New York and Paris have similar colder
					temperatures, whereas Los Angeles and Sydney have similar
					warmer temperatures. All of these cities appear to have a
					slight upward trend in temperature.{" "}
				</Typography>
				<img src={year_period_avg_cities_us}></img>
				<Typography variant="caption">
					Plotting cities in the United States highlights which cities
					experienced colder climates, and which cities experienced
					warmer climates
				</Typography>
				<Typography>
					In contrast to analyzing international cities, we’re also
					interested in looking at domestic cities located within the
					United States. To better visualize all the cities in the
					United States across our entire climate dataset, we elected
					to use a heatmap as plotting all the cities on a line graph
					would prove too busy for our graph. As we can see from our
					heatmap, cities remain consistent throughout each 25-year
					period, with slight fluctuations between one 25-year period
					and the subsequent 25-year period. We observe that cities
					like Orlando, Florida remain consistently at roughly 22
					degree Celsius, whereas cities like Cambridge, Massachusetts
					remain consistently at roughly 7 degree Celsius
				</Typography>

				<Typography>
					In our dataset, we had the most data points for cities,
					nearly 8 million rows to process. Thus, our initial plots
					for the global average temperatures and the city
					temperatures reassures us our data cleaning process was
					successful, and we can move forward with our increasingly
					complex analysis in the sections downstream. Now, let’s take
					a closer look at the temperature for countries.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>

				<Typography variant="h6"> Countries Dataset EDA </Typography>
				<img src={country_slope_intercept}></img>
				<Typography>
					Because each country has its own seasonal patterns that
					affect their temperature throughout the year, we need to
					first make our data stationary. We decided to convert
					monthly temperatures to a yearly average in order to get a
					big picture of the trends in temperature. Then, we extracted
					the slope and intercept based on the temperature trends for
					each country. The delta represents the difference in
					temperature from the starting year of 1743 and the ending
					year of 1990 based on the slope and intercept from linear
					regression. We used the years 1743 and 1990 because those
					are the farthest time our data goes to. Then we binned each
					delta into 0.5 degree increments to group countries with
					similar levels of temperature change for visualization
					purposes.
				</Typography>
				<img src={country_slope_intercept_1743}></img>
				<Typography>
					These are the countries with the highest slope, which
					indicates the largest rate of heat increase over the time
					period. The intercept shows the linear regression’s
					projected temperature for the year 0, which is not a good
					estimate because human-caused climate change was likely not
					a factor before the 1800s. However, the slope and intercept
					are useful for projecting forward from the 1800-present data
					to try and extrapolate for future years. The delta measures
					the total temperature change from 1743 to 2013 based on the
					slope from the linear regression and the number of years,
					which should give an idea of how temperature increased while
					controlling for any variance in the temperature of the
					starting/ending year. As temperature trends are not linear,
					we acknowledge that these are rough estimates to get the
					temperature deltas.
				</Typography>
				<Typography>
					Looking at the intercepts for 1743, the majority of
					countries with large temperature increases have either very
					cold or very hot base temperatures. However, there are also
					a few entries (such as Turkmenistan or United States) with
					more moderate temperatures.
				</Typography>

				<img src={country_list_temp_change}></img>

				<Typography>
					We organized the 1743-2013 temperature delta data into bins
					of 0.5 degrees to aid with visualizing the data.
				</Typography>

				<img src={country_temp_change}></img>

				<Typography>
					After binning, we counted how many countries fit within each
					temperature delta bin. It seems like the most common
					temperature delta is 2 - 2.5 degrees. The data looks
					somewhat like a normal distribution centered on this bin,
					but there are some very high delta outliers.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "24px" }}></Divider>

				<Typography variant="h5">
					<b>EDA: k-Means Clustering & t-SNE Visualizations</b>
				</Typography>
				<Typography>TO BE DONE </Typography>

				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>
				<Typography variant="h5">
					<b>Human Actions</b>
				</Typography>
				<Typography>
					Since climate change is a very important phenomenon, we were
					interested in exploring what correlations might exist
					between government activities and their countries’ surface
					temperature deltas.Governments that have more funding might
					be able to fund environmental research and start programs
					specifically targeting global warming. These governments
					might also have more power to enforce laws to prohibit
					individuals and corporations from doing things that harm the
					environment. An example of that would be banning plastic
					bags and enforcing carbon tax. The three areas that we
					looked into were absolute tax revenue in US dollars, tax
					revenue as a percentage of GDP and capitalistic index.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>
				<Typography variant="h6">Absolute Tax Revenue</Typography>
				<Typography>
					We took the median tax revenue of all the countries over the
					past 30 years to get a sense of which countries have the
					highest tax revenue.
				</Typography>

				<img src={tax_rev_usd_bin}></img>

				<Typography>
					In terms of how much tax revenue each country collects, the
					US is at the top by far. The second and third country with
					the highest tax revenue is China and Japan. Afterwards, we
					see mostly European countries.{" "}
				</Typography>
				<Typography>
					To start, let’s plot out the decadal average temperatures
					beginning in the 20th century for countries with the highest
					tax revenue, so we can understand the general ordering on
					how warm or cold each country is, in relation to one another
				</Typography>
				<img src={decadal_average_temp_countries_high_tax}></img>
				<Typography>
					should add some words here explaining the chart{" "}
				</Typography>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<img
						style={{ maxWidth: "calc(min(100%,400px))" }}
						src={countries}
					></img>

					<img
						style={{ maxWidth: "calc(min(100%,400px))" }}
						src={tax_rev_usd_europe}
					></img>
				</div>

				<Typography variant="caption">
					Caption: tax trends seems to be going up generally. US
					collects the most tax by far.
				</Typography>
				<Typography>
					Tax revenues increased consistently over time across most
					countries. However, since tax revenue is partly a function
					of GDP, this is likely just a function of GDP growth over
					time. We also need to account for inflation, which would
					also lead to an increase in the raw tax revenue collected.
				</Typography>
				<img src={temp_delta_tax_rev_usd}></img>
				<Typography variant="caption">
					Correlation Coefficient: -0.009853504342372723
				</Typography>

				<Typography>
					For purposes of data visualization, we removed the USA
					because it was a large outlier in tax revenue. We didn’t see
					any correlation overall between the raw tax revenue and the
					countries’ temperature deltas.{" "}
				</Typography>

				<Typography>
					There are a series of countries (the horizontal cluster at
					the bottom of the graph), which have low tax revenue, but a
					wide variety of temperature deltas. As tax revenues are
					partly a function of GDP, these are likely poor countries
					across the world, with variance in their temperature deltas
					based on location and other factors.
				</Typography>

				<Typography>
					There is also a vertical cluster that can be seen on the
					left of the graph, containing some high-tax revenue (Likely
					rich) countries which all have a similarly low temperature
					delta. These are all European countries as seen above.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }} ç></Divider>

				<Typography variant="h6">
					Tax Revenue as percentage of GDP
				</Typography>

				<Typography>
					In several of the analyses above, we noticed that the
					richest countries in the world (as in, those with the
					largest GDP) also had the highest tax revenues. Although
					this makes sense, it means that raw tax revenue may not be a
					good indicator of government economic policies, which we are
					trying to correlate with climate change heating. Therefore,
					we needed a measure of tax revenue which controls the
					baseline influence of each country’s GDP. We decided to look
					at tax revenue as a percentage of GDP, to better measure how
					aggressively governments tax the economic resources that are
					present in each country. It also controls the level of
					inflation in each country.
				</Typography>

				<img src={tax_rev_gdp_list}></img>

				<Typography>
					After controlling for GDP and inflation, the USA and China
					(Largest economies) were no longer at the top of the tax
					revenue chart. We noticed that all of the countries with the
					highest tax revenue per GDP were European countries. This
					could be due to the history of economic policies in Europe,
					or due to other social or historical factors.
				</Typography>

				<img src={highest_tax_rev_gdp}></img>

				<Typography>
					Looking at the tax revenue per GDP of these European
					countries, there was no noticeable overall trend in the
					group over the last few decades. Tax revenues fluctuated,
					potentially as a result of political changes over time.
				</Typography>

				<img src={temp_delta_tax_rev_gdp}></img>

				<Typography variant="caption">
					Correlation coefficient: -0.6120837039173447
				</Typography>

				<Typography>
					We looked for correlation between tax revenue per GDP and
					temperature delta for each country. We found a
					moderate-to-strong negative correlation of -0.61. The two
					clusters from the raw GDP graph (European countries in the
					top left, some high variance of temperature deltas in the
					bottom right) are still somewhat visible, but there is now a
					clearer trend indicating that countries with a high tax
					revenue per GDP experienced a lower temperature change
					between the 1700s and now.
				</Typography>

				<Typography>
					We originally speculated that governmental action (which we
					tried to measure via tax revenue) could contribute to lower
					heating due to climate change. Although we did find a
					correlation between these metrics, in reality there are
					several reasons that this hypothesis is unlikely. We know
					that climate change affects the whole planet, causing global
					warming as a result of increased greenhouse gases in the
					atmosphere. Polluting countries don’t just cause warming
					locally, but instead warm the planet as a whole. This has
					been the subject of tough discussions at climate summits and
					the like. Therefore, it is unlikely that governments raising
					more tax revenue and using it for aggressive climate
					policies would be able to achieve local cooling effects.
				</Typography>

				<Typography>
					One possibility is that there is a causal relationship, but
					in the reverse direction compared to what we expected. It
					might be possible that high temperature deltas cause
					instability and low tax revenue. For example, this could be
					due to the negative economic impacts of climate change, or
					the impact of natural disasters and resource difficulties on
					stability and social trust. Our tax data starts in 1990, so
					it may be factoring in the more recent, larger effects of
					climate change. However, it is hard to conclusively say that
					this is the cause of the correlation.
				</Typography>

				<Typography>
					It is more likely that the data is negatively correlated for
					other reasons. For example, these factors could be
					correlated as a result of historical circumstances. Many
					rich and stable countries able to tax and spend more, such
					as European countries, are located in temperate areas of the
					world which may be experiencing less heating due to climate
					change. At the same time, they are rich and stable because
					of historical circumstances such as colonialism. There is
					not necessarily any causal relationship between the tax
					revenue per GDP and the countries’ temperature deltas, but
					instead they could be two outcomes of the countries’
					geographical locations, related by historical circumstances.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>
				<Typography variant="h6">Capitalistic Index</Typography>
				<Typography>
					Another large scale human factor that we considered was the
					capitalistic index. The reason we were interested in looking
					at the correlation between capitalism and temperature change
					is that generally, the more capitalist a country is, the
					more power corporations have. In general, corporations seek
					to increase their profit margins, which could lead to
					production methods that may not take the environment into
					consideration. In addition, the more capitalist a country
					is, the less power the government has over domestic issues.
					Therefore, the government will be less likely to push
					environmental regulations.{" "}
				</Typography>
				<img src={temp_delta_capitalist}></img>
				<Typography variant="caption">
					Correlation coefficient: -0.25111116990542454
				</Typography>

				<Typography>
					The correlation between capitalism and surface temperature
					of that area is weakly correlated. A good quantity of the
					countries which scored high on the capitalism index are
					countries with a relatively low baseline temperature. There
					are some exceptions though, such as Singapore. Cool
					countries experienced less heating from climate change, so
					this may explain the weak negative correlation between
					capitalistic index and temperature delta.
				</Typography>

				<Divider sx={{ opacity: 0, padding: "24px" }}></Divider>
				<Typography variant="h5">
					<b>Non-Human Factors</b>
				</Typography>
				<Typography>
					The current global warming crisis is mainly driven by human
					actions. The release of greenhouse gas leads to more
					absorption of sunlight energy, leading to a worldwide
					increase in temperature. Although humans are the primary
					cause of the current global warming, climate historically
					has been affected by natural factors. Wind patterns,
					volcanic activity, ocean currents, and other natural
					phenomena have been responsible for fluctuations in local
					temperatures around the world.
				</Typography>
				<Typography>
					As part of our analysis, we examined the effects of natural
					events on local and worldwide temperatures. Specifically, we
					focused on the 1815 eruption of Mt. Tambora, the 1991
					eruption of Mt. Pinatubo, and the regular El Nino and La
					Nina cycle from the Pacific Ocean.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>

				<Typography variant="h6">
					Mount Tambora’s and Mount Pinatubo’s Effects on Temperature
				</Typography>
				<Typography>
					In 1815, Mount Tambora erupted in Indonesia. The eruption
					released air particles that traveled across the world,
					leading to a global drop in temperature. According to The{" "}
					<a href="https://www.irishtimes.com/opinion/a-volcanic-eruption-with-global-repercussions-an-irishman-s-diary-on-1816-the-year-without-a-summer-1.2760797">
						Irish Times
					</a>
					, the world was already experiencing a cold episode that was
					worsened by the volcanic eruption.{" "}
				</Typography>

				<img src={mt_tambora_temp_diff}></img>

				<Typography>
					As shown above, the world consistently dropped in
					temperature from 1813 to 1816.
				</Typography>
				<Typography>
					The{" "}
					<a href="https://www.irishtimes.com/opinion/a-volcanic-eruption-with-global-repercussions-an-irishman-s-diary-on-1816-the-year-without-a-summer-1.2760797">
						Irish Times
					</a>{" "}
					and{" "}
					<a href="https://www.smithsonianmag.com/history/blast-from-the-past-65102374/">
						Smithsonian Magazine
					</a>{" "}
					reported that the Northern Hemisphere experienced a
					noticeable drop in temperature after the eruption in 1816 -
					a period called “the year without a summer”. It is predicted
					that the eruption contributed to the temperature drop.
					Interestingly, our dataset didn’t show a drastic drop in
					temperature in northern countries. Our analysis shows an
					approximate 0.3°C drop from 1815 to 1816.
				</Typography>
				<img
					style={{
						maxWidth: "calc(min(100%,500px))",
						margin: "auto",
					}}
					src={northern_hemisphere_temp}
				></img>
				<Typography>
					In order to better observe the intensity of the temperature
					drop, we focused on specific local regions in northeastern
					US (Maine, Vermont, New York, New Hampshire, Massachusetts,
					Connecticut, and Rhode Island) and western Europe (Ireland,
					France, Spain, Portugal, and the UK). Click{" "}
					<a href="https://colab.research.google.com/drive/1GFrKDCUyf-Mw6vUDgcCVC4CmQ16V7tVB#scrollTo=0RukoYYax0HI">
						here
					</a>{" "}
					for a map of temperatures in these regions from 1814 to
					1816.
				</Typography>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<img
						style={{
							maxWidth: "calc(min(400px,100%))",
							minWidth: "0",
						}}
						src={mt_tambora_ne_us}
					></img>
					<img
						style={{
							maxWidth: "calc(min(400px,100%))",
							minWidth: "0",
						}}
						src={mt_tambora_west_europe}
					></img>
				</div>
				<Typography>
					The northeastern US territories dropped in temperature by
					over half a degree from 1814 to 1816. The European countries
					experienced an approximate 0.8 degree drop in a one-year
					span from 1815 to 1816. Numerically, the temperature
					decreases were not significant. Yet, The Irish Times and
					Smithsonian Magazine mentioned that the temperature was so
					frigid that crop yield was heavily reduced. The low yield
					led to famine across northeastern US and western European
					countries. As noted by Smithsonian Magazine, the cold
					weather and the resulting loss of human life during that
					time period was not solely caused by the volcanic eruption.
					The European countries were already experiencing a
					temperature decrease before the eruption - a reminder that
					temperature is influenced by multiple factors.
				</Typography>
				<Typography>
					In 1991, another major, albeit smaller volcanic eruption
					occurred in the Philippines. The eruption of Mount Pinatubo
					released sulfur dioxide into the atmosphere, and the
					intensity of the release caused a drop in global
					temperature.
				</Typography>
				<img
					style={{
						maxWidth: "calc(min(100%,500px))",
						margin: "auto",
					}}
					src={mt_pinatubo_global_temp}
				></img>

				<Typography>
					Like the Mount Tambora eruption, the effects of the Mount
					Pinatubo eruption are better described by examination of
					local regions. The graph below shows the year-to-year
					difference in the average temperatures of southeastern
					countries near the Philippines. It appears that Thailand,
					Vietnam, Laos, and Australia saw the largest drops in
					temperature from 1991 to 1992 - a trend that was likely to
					be partially caused by the volcanic eruption.
				</Typography>

				<img src={mt_pinatubo_temp_difference}></img>

				<Typography variant="h6">
					El Nino and La Nina’s Effect on Temperature
				</Typography>

				<Typography>
					In the Pacific Ocean, the temperature can fluctuate from
					year to year. The National Oceanic and Atmospheric
					Administration (NOAA) records the temperature of an area
					bounded by 5° to -5° longitude, -120° to -170° latitude.
					Once the temperature of the area is greater than the average
					for some time, a phenomenon known as El Nino is triggered.
					An El Nino event affects the wind currents to North America,
					causing higher temperature in the northwestern US and lower
					temperature in the southern US. If the temperature is less
					than the average instead, the opposite phenomenon La Nina
					might be triggered. The wind currents lead to lower
					temperature in the northwestern US and higher temperature in
					the southern US.
				</Typography>
				<Typography>
					We will focus on northwestern and southern US states to
					examine the effects of El Nino and La Nina. We chose to
					focus on Alaska, Idaho, Montana, Oregon, Washington, and
					Wyoming for the northwestern region and Alabama, Arkansas,
					Georgia, Louisiana, Mississippi, and Texas for the southern
					region. The heat map below shows the average temperatures of
					these states every 5 years starting from 1950. The El Nino
					and La Nina period we decided to analyze occurred in the
					1970s and 1980s, so visualizing the climate in the decades
					prior will give us a better understanding of climate trends
					leading up to the El Nino and La Nina events.
				</Typography>
				<img src={state_avg_temp_trend}></img>

				<Typography>
					To visualize the impacts of El Nino and La Nina, we checked
					the NOAA’s historical records. We noticed that a strong El
					Nino episode occurred from September 1982 to March 1983 and
					a strong La Nina episode occurred from November 1973 to
					January 1974. We calculated the 30-year average temperatures
					of select US states and noted the differences between the
					states’ averages and their temperatures during the El Nino
					and La Nina incidents. For more details, click{" "}
					<a href="https://colab.research.google.com/drive/1GFrKDCUyf-Mw6vUDgcCVC4CmQ16V7tVB#scrollTo=1DoHqidZ7hfg">
						here
					</a>
					.
				</Typography>

				<Typography>
					As shown below, we can see that the strong 1982-1983 El Nino
					led to higher than average temperatures across select
					northwestern states.
				</Typography>

				<img src={el_nino_northern_states}></img>

				<Typography>
					Meanwhile, some southern states experienced colder than
					average temperatures for the most part during these same
					months.
				</Typography>

				<img src={el_nino_southern_states}></img>
				<Typography>
					The La Nina episodes should theoretically lead to the
					opposite observations as El Nino. The La Nina episode from
					1973 to 1974 led to lower than average temperatures in Nov
					1973 and Jan 1974 among northwestern states, but the Dec
					1974 temperatures were unexpectedly higher than average.
				</Typography>

				<img src={la_nina_northern_states}></img>
				<Typography>
					As expected, the La Nina led to warmer temperatures in the
					southern states in Nov 1973 and Jan 1974. There was a
					negative difference in Dec 1973 in Louisiana and Alabama,
					but the sum of the positive differences outweighs the
					negative difference.
				</Typography>
				<img src={la_nina_southern_states}></img>
				<Divider sx={{ opacity: 0, padding: "24px" }}></Divider>
				<Typography variant="h5">
					<b>Models</b>
				</Typography>
				<Typography>
					Temperature prediction is a complicated process due to the
					many factors that influence weather. In fact,{" "}
					<a href="https://news.stanford.edu/2023/01/30/ai-predicts-global-warming-will-exceed-1-5-degrees-2030s/">
						Stanford University
					</a>{" "}
					recently helped create a prediction model using neural
					networks. Rather than taking into account many variables, we
					decided to build a simple time-series model for temperature
					prediction. The model will accept a city or country, a
					future month, and a future year and predict the temperature
					at that time.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>
				<Typography variant="h6">
					Comparing ARIMA and Prophet
				</Typography>
				<Typography>
					We considered two time-series models, ARIMA and{" "}
					<a href="https://facebook.github.io/prophet/">Prophet</a>,
					and compared their effectiveness on sample data.
				</Typography>
				<Typography>
					The ARIMA model was difficult to train due to its
					hyperparameters. ARIMA is based on three components:
					autoregression, differencing, and moving average. As we
					adjust these hyperparameters, the model can take longer to
					train. A simple assignment or a complex assignment would
					lead to inaccurate predictions. For details on how we
					trained the ARIMA model, click{" "}
					<a href="https://colab.research.google.com/drive/1GFrKDCUyf-Mw6vUDgcCVC4CmQ16V7tVB#scrollTo=1OZdI0p8DMts">
						here
					</a>
					.
				</Typography>
				<Typography>
					Meanwhile, the Prophet model was much easier to train. It
					automatically adjusts its training to missing dates in the
					dataset, and the training time was significantly less than
					ARIMA.
				</Typography>
				<Typography>
					We trained ARIMA and Prophet models to predict temperatures
					of over 200 countries. We used all available data before
					1979 with no gaps in the dates as training. The data from
					1980 and beyond was used as testing. Based on the root mean
					squared error, the Prophet model was superior.
				</Typography>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<img
						style={{ maxWidth: "calc(min(100%,400px))" }}
						src={arima_rmse}
					></img>
					<img
						style={{ maxWidth: "calc(min(100%,400px))" }}
						src={prophet_rmse}
					></img>
				</div>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>

				<Typography variant="h6">
					Predicting City and Countries Temperatures
				</Typography>
				<Typography>
					We used Prophet to predict the temperatures of some of the
					hottest and coldest locations in the world. Our datasets
					have temperature data up to 2013, so we predicted the Jan
					2013 temperatures. Despite training Prophet on data that
					stops at 1979, it was able to make fairly accurate
					predictions that are over 30 years into the future.
				</Typography>
				<Typography>
					Here are the predictions for hottest cities and countries:
				</Typography>
				<Typography>
					<b>Hottest City Temp Predictions</b>
				</Typography>
				<img
					style={{
						maxWidth: "calc(min(100%,500px))",
						margin: "auto",
					}}
					src={hottest_city_temp_predictions}
				></img>
				<Typography>
					<b>Hottest Country Temp Predictions</b>
				</Typography>
				<img
					style={{
						maxWidth: "calc(min(100%,500px))",
						margin: "auto",
					}}
					src={hottest_country_temp_predictions}
				></img>
				<Typography>
					Here are the predictions for coldest cities and countries:
				</Typography>
				<Typography>
					<b>Coldest City Temp Predictions</b>
				</Typography>
				<img
					style={{
						maxWidth: "calc(min(100%,500px))",
						margin: "auto",
					}}
					src={coldest_city_temp_predictions}
				></img>
				<Typography>
					<b>Coldest Country Temp Predictions</b>
				</Typography>
				<img
					style={{
						maxWidth: "calc(min(100%,500px))",
						margin: "auto",
					}}
					src={coldest_country_temp_predictions}
				></img>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>

				<Typography variant="h6">
					Predicting Temperatures in Countries with Large Temperature
					Change
				</Typography>
				<Typography>
					In our EDA, we used a linear fit to roughly estimate the
					temperature change of each country from 1743 to 2023. The
					linear fit is not perfect, but temperature increase is
					generally not linear. It, however, gives some idea of which
					countries have the largest temperature change since the
					mid-1700s.
				</Typography>
				<Typography>
					We used Prophet to predict the April 2024 temperatures of
					the countries with the largest temperature change (increased
					the most). The predictions are not totally accurate. We
					compared the predictions to the actual single-day low and
					high temperature readings on April 23, 2024. Based on the
					data from{" "}
					<a href="https://weather.com/">The Weather Company</a>, five
					out of the eight predictions landed within the respective
					countries’ low and high temperature intervals (Russia,
					Canada, and Uzbekistan were the exceptions). We understand
					that using single-day readings is not a reliable way to
					measure the accuracies of our models. Nevertheless, it helps
					give a preliminary assessment of the accuracy of our
					predictions.
				</Typography>
				<img
					style={{
						maxWidth: "calc(min(100%,400px))",
						margin: "auto",
					}}
					src={high_temp_change_country_predictions}
				></img>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>

				<Typography variant="h6">
					Predicting Temperatures in Low and High Tax Countries
				</Typography>
				<Typography>
					In our EDA, we also noted that a country’s tax revenue per
					GDP is correlated with its temperature change. It would be
					interesting to use Prophet to predict the future
					temperatures at countries with low and high tax revenue.
				</Typography>
				<img
					style={{
						maxWidth: "calc(min(100%,500px))",
						margin: "auto",
					}}
					src={high_and_low_tax_country_predictions}
				></img>
				<Typography>
					It is clear that countries with less tax have higher
					predicted temperatures. It is important to note that this is
					a correlation rather than a causation. Congo, Niger, and
					Uganda are all located in central Africa, which is known for
					its intensely hot climate. Tax revenue is not a cause of low
					or high temperature.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "24px" }}></Divider>
				<Typography variant="h5">
					Conclusion and Further Research
				</Typography>
				<Typography>TBD</Typography>
			</Box>
		</div>
	);
};
