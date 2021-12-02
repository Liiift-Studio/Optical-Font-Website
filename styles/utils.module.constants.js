import { Typography, Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import styles from "../styles/layout.module.css";
import { circle2, listItems } from "./layout.styles";

export const [About, FLV, P, UG, A, PR] = [1, 2, 3, 4, 5, 6];

export const flv = "INTRO";
export const ug = "USE GUIDE";
export const p = "PROJECT";
export const a = "ACCESSIBILITY";
export const pr = "PRIVACY";

export const loe = "Level of Enhancement";
export const c = "Controls";
export const m = "Menu";

export function FlvCopy() {
  return (
    <>
    <Typography variant="body1">
      Optical is a customizeable font and a web tool for low vision. Install the
      Google Chrome browser extension, fine tune your font and read the internet
      in letters set to your legibility needs.
      <br />
      <br />
      Specific adjustments have been shown to improve legibility for low vision.
      Dashed zeros, bars on lowercase ‘i’s, differentiation between ‘O’s, ‘0’s,
      ‘l’s, and ‘I’s, specific considerations in proportions and spacing, and
      other enhancements help. Because low vision varies in source and impact,
      we’ve created a tool that gives you control over many of these
      enhancements. Because legibility is influenced by the amount of time
      you’ve spent reading a specific font, Optical lets you read the internet
      in consistent letters and find the balance between conventional and
      unconventional letter shapes.
      </Typography>
    </>
  );
}

export function UgCopy() {
  return (
    <>
    <Typography variant="body1">
      Install Optical by clicking on the install button on the top of this page.
      Find it by clicking the text cursor icon to the right of the web address
      bar in Chrome. Click the question mark icons to bring you to the
      explanations page.
    </Typography>
    </>
  );
}

export function ProjectCopy() {
  return (
    <>
    <Typography variant="body1">
      Optical is being developed out of the Health Design Lab at Emily Carr
      University in partnership with Disability Alliance BC and The Accessible
      Technology Program.
      <br />
      <br />
      Optical is free to use. It collects no data, including cookies or personal
      information. Our website and extension have been created with
      accessibility features in mind. If there is anything that we’ve missed,
      we’d love to hear from you:{" "}
      <a className={styles.a} href={"mailto:feedback@opticalfont.com"}>
        feedback@opticalfont.com
      </a>
      <br />
      <br />
      This project aims to complement other low vision reading strategies. Its
      not a be all end all solution, but a small step in making the internet
      better. Our goal is to use new research and technology to put another tool
      in your toolbox. We owe deep gratitude to the publications of researchers
      like Kevin Larson, Sofie Beier, Aries Ardititi, Fiset and others.
    </Typography>
    </>
  );
}


export function LevelOfEnhancementCopy() {
  return (
    <>
    <Typography variant="body1">
      Level 1 is designed for mild low vision. Level 5 is designed for more
      advanced low vision. Levels 2,3, and 4 are in between. These levels make
      larger changes to the font’s legibility. The controls below make smaller
      fine tuning adjustments.
      </Typography>
    </>
  );
}

export function ControlsCopy() {
  return (
    <List
      sx={{
        right: "4rem",
        top: -15,
      }}
    >
      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            Differentiation controls the amount of distinction between commonly
            misread letters: capital ‘I’s and lowercase ‘l’s, lowercase ‘i’s, rn
            and m, etc... Increasing differentiation makes for unique letters,
            reducing misreading, but decreasing familiarity. Find your balance.
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            Boldness controls the line widths, or ‘weight’ of your letters. For
            many people, thin lines decrease the legibility of fine details, but
            bold lines can crowd out the negative spaces. You know your vision
            best. Pick what you think will work, read for 20 minutes +, and come
            back and adjust
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            Spacing controls the gaps between letters and words. Legibility is
            improved by generous space, but too widely spaced text can disrupt
            the flow of reading paragraph text. Again, use what works best for
            you.
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            Punctuation controls the size of punctuation. Fine details are lost
            at small sizes, but we don’t often read over large punctuation, so
            it can disrupt text. Find your balance.
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export function MenuCopy() {
  return (
    <List sx={{ right: "4rem" }}>
      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            Dark Mode/ Light Mode: choose what works best for you.
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            Feedback: Send us any feedback you have.
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            Use Guide: brings you back here.
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            Soon we’ll have a download button to download your font to use
            offline.
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem sx={listItems}>
        <ListItemIcon>
          <Box sx={circle2} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">Reset: reset your settings.</Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}
