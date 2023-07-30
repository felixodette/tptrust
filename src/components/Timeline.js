import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import FlagIcon from '@mui/icons-material/Flag';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import TransferWithinAStationRoundedIcon from '@mui/icons-material/TransferWithinAStationRounded';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AgricultureRoundedIcon from '@mui/icons-material/AgricultureRounded';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import ToysRoundedIcon from '@mui/icons-material/ToysRounded';
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import DeveloperBoardRoundedIcon from '@mui/icons-material/DeveloperBoardRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
export default function CustomizedTimeline() {
    return (
        <section className="team-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/assets/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Our Story</h2>
                            {/*<p className="section__meta">meet professionals</p>*/}
                            <Timeline position="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2002</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <FlagIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Registration
                                        </Typography>
                                        <Typography>Jo and Jon Parsons registered Turning Point as a UK charity and moved to Kenya to start the
                                            work in Kibera.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2003</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="primary">
                                            <PlayCircleOutlineRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Beginnings
                                        </Typography>
                                        <Typography>Our work started in Kibera with a bowl full of porridge and 7 children.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2004</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="primary" variant="outlined">
                                            <TransferWithinAStationRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Transition Class
                                        </Typography>
                                        <Typography>We launched the Transition Class and returned the first group of children back to school.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2005</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                        <TimelineDot color="secondary">
                                            <CabinRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Camp
                                        </Typography>
                                        <Typography>We ran our first holiday camp for children we are supporting in school.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2006</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <SchoolRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            The First Duo
                                        </Typography>
                                        <Typography>We sent the first two children to secondary school.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2007</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="primary">
                                            <AgricultureRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Slum to Farm
                                        </Typography>
                                        <Typography>Nine single mothers moved out of Kibera to our farm in Kinangop to start a new life.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2008</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="primary" variant="outlined">
                                            <MoneyRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Microfinance Programme
                                        </Typography>
                                        <Typography>We launched a microfinance programme with 20 parents receiving small loans.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2009</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                        <TimelineDot color="secondary">
                                            <ToysRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Kianda Pre-School
                                        </Typography>
                                        <Typography>We opened our second children’s centre in Kianda village, Kibera.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2011</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <LandscapeRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Land Transfer
                                        </Typography>
                                        <Typography>The first group of mums to move to our farm were given their own 1 acre plots of land. A second
                                            group of 10 single mums moved to the farm with their children.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2012</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="primary">
                                            <OpenInFullRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Laini Saba Center
                                        </Typography>
                                        <Typography>We opened our third centre in LainiSaba village, Kibera targeting local youth.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2014</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="primary" variant="outlined">
                                            <LibraryBooksRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Fountains of Hope School and Laini Saba Community Library
                                        </Typography>
                                        <Typography>We launched both the Fountains of Hope School and the Laini Saba Community Library. The
                                            second group of mums at the farm achieved land ownership.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2015</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                        <TimelineDot color="secondary">
                                            <RepeatIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Succession
                                        </Typography>
                                        <Typography>Jon Parsons handed over the CEO role to Judy Akoth. Sylvester became the first young person
                                            from Turning Point to graduate from University with a Bachelors in Commerce.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2018</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <SchoolRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Full Primary School
                                        </Typography>
                                        <Typography>The first year we ran all eight years of primary school at the Fountains of Hope School.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2019</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <ReceiptLongRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            First Strategic Plan
                                        </Typography>
                                        <Typography>We developed our first 5-year strategic plan to communicate our goals and guide
                                            implementation of our plans.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2021</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <LaptopMacIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Computer Lab
                                        </Typography>
                                        <Typography>We set up a new computer lab at the Fountains of Hope School with 11 new desktops.
                                            We reviewed Transition Programme and moved it to the Fountains of Hope School..</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2022</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <DeveloperBoardRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Organizational Development
                                        </Typography>
                                        <Typography>We moved a step higher to improve the quality of our work by streamlining the existing systems
                                            and structures, staff training and development, collective project planning and monitoring and
                                            evaluation.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <b>2023</b>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <CelebrationRoundedIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            20 Years of Transforming Lives!
                                        </Typography>
                                        <Typography>We turned 20 years of working with children and families in Kibera!</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
