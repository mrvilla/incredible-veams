<p align="right">
    <a href="https://badge.fury.io/bo/veams-component-video"><img src="https://badge.fury.io/bo/veams-component-video.svg" alt="Bower version" height="20"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Video

## Description

A video component supporting WebM, MP4 and Subtitles.

-----------

## Installation

### Installation with Veams

`veams install vc video`

### Installation with Bower

`bower install veams-component-video --save`

-----------

## Fields

### Settings
- settings.videoContextClass {`String`} [default] - _Context class of component._
- settings.videoClasses {`String`} - _Modifier classes for component._
- settings.videoOptions {`String`} - _Apply multiple options as string._

### Content
- content.videoPoster {`String`} - _Url to a poster image._
- content.videoMp4 {`String`} - _Url to mp4 video file._
- content.videoWebm {`String`} - _Url to webm video file._
- content.videoTrack {`Object`} - _Object which contains tracking data._
- content.videoTrack.trackSrc {`String`} - _Url to track file._
- content.videoTrack.trackSubtitle {`String`} - _Subtitle._
- content.videoTrack.trackLang {`String`} - _Language._
- content.videoTrack.trackLabel {`String`} - _Label._






