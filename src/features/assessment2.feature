Feature: Video and Modal window validation

Scenario: Validate the video modal
    Given User is in the best buy video modal page
    When User select a image-button to play video
    Then Video is played