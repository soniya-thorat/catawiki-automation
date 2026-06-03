Exploratory testing report:
Alongside the automated tests, I performed exploratory testing on Catawiki platform and identified the following observations.
------------------------------------------------------------------------------

1. Search results update before "Show results" is clicked
Type : UX improvement opportunity
Steps :
i. Search for "watch".
ii. Apply a filter (eg. Brand = Omega).
iii. Observe the results are loaded before clicking "Show objects".

Observed Result :
The results list updates automatically before the user clicks the "Show objects" button.

Expected Result :
Either, 
i. Results should only update after clicking "Show objects", or
ii. Show objects button should be something else like "Back to results"

------------------------------------------------------------------------------

2. Inconsistent filter persistence when navigating back
Type: UX Consistency Issue
Steps:
i. Search for an item.
ii. Apply Country = France filter.
iii. Open a lot.
iv. Navigate back using browser Back button.
v. Repeat and navigate back using the website’s "Back to search" navigation.

Observed Result:
i. Browser Back preserves the filter.
ii. "Back to search" in website removes the filter.

Expected Result:
Both navigation methods should behave consistently and preserve the user’s filtering context unless there is any specific requirement.
Impact:
Users may unexpectedly lose their search refinements and need to reapply filters.

------------------------------------------------------------------------------

3. Search term persistence behaves inconsistently in mobile view
Type: UX Consistency Issue
Steps:
i. Open mobile view.
ii. Search for “rolex”.
iii. Search for another term (e.g. “phone”).
iv. Use browser Back navigation.

Observed Result:
The search field displays “rolex” instead of the most recent search term.

Expected Result:
The search field should reflect the state associated with the page being restored.

------------------------------------------------------------------------------

4. Unexpected GET request is failing when opening a lot
Type: Investigation Required

Observed Result:
A GET request appears to be triggered when attempting to open a lot, and the response appears unexpected.

Error returned:
{
    "error": {
        "code": "unauthorized_error",
        "message": "You are not authorized to perform this action.",
        "details": null
    }
}

Notes:
Further investigation is required to determine whether the request is expected platform behavior or an application issue. There is no issue while opening the selected lot from user perspective.
Impact:
Unknown errors which do not impact functionality.

------------------------------------------------------------------------------

5. “Ends tomorrow at 20:00” filter appears inaccurate
Type: Potential Defect

Steps:
i. Apply the filter “Ends tomorrow at 20:00”.
ii. Review returned lots.

Observed Result:
Some returned lots do not appear to end at the specified time.

Expected Result:
All returned results should satisfy the selected filter criteria.

Impact:
Users may receive results that do not match their filtering expectations.

------------------------------------------------------------------------------

6. Rapid image transition when jumping from first to last image
Type: UX Improvement Opportunity

Steps:
i. Open a lot containing multiple images.
ii. Select the first image.
iii. Jump directly to the last image.

Observed Result:
The gallery rapidly animates through all intermediate images before reaching the selected image.

Expected Result:
The gallery should transition directly to the selected image or use a smoother animation.

Impact:
The rapid movement can be visually distracting and may negatively affect user experience.
