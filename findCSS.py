import re

css_file_path = 'Frontend.css'
html_code = '''
<div className="vw6-paragraphs__kwcParagraphItem vw6-paragraphs__all vw6-paragraphs__outerTeaserTextContent" data-width="100%">
    <div className="vw6-contentTeaserTextContent vw6-contentTeaserTextContent--gradient">
        <div className="vw6-webCustom vw6-contentTeaserTextContentHeadline">
            <h2 className="vw6-contentTeaserTextContentHeadline__headline vw6-contentTeaserTextContentHeadline__d350">
                <span className="vw6-contentTeaserTextContentHeadline__main"><b>Vaša direktna linija</b> do nas</span>
            </h2>
        </div>
        <div className="vw6-webCustom vw6-contentTeaserTextContentText">
            <p className="vw6-contentTeaserTextContentText__headline vw6-contentTeaserTextContentText__d200">
                <span className="vw6-contentTeaserTextContentText__main">Zainteresovani ste za određenu ponudu, neki naš model, želite da nas posavetujete ili imate primedbu? Naši Volkswagen dileri su tu za vas.</span>
            </p>
        </div>
        <div className="vw6-webStandard vw6-contentTeaserTextContentButton vw6-contentTeaserTextContentButton--secondaryInverted vw6-contentTeaserTextContentButton--enabled">
            <a className="vw6-kwcBasicLinkTagIntern vw6-kwcLinkIntern" href="/volkswagen-dileri">Pretraga dilera</a>
        </div>
    </div>
</div>
'''

# Regular expression to find all className attributes
class_names = re.findall(r'className="([^"]+)"', html_code)

# Use a set to store unique words
unique_words = set()
for class_name in class_names:
    unique_words.update(class_name.split())

# Convert set back to a list and print
print(list(unique_words))

import re

# List of words to match against CSS selectors
words_to_match = list(unique_words)

# Function to extract matching CSS rules from a CSS file
def extract_css_rules(css_file_path, words):
    with open(css_file_path, 'r') as file:
        css_content = file.read()

    # Prepare a regex pattern to match any of the words as selectors
    pattern = r'([^{}]*?\b(?:' + '|'.join(re.escape(word) for word in words) + r')\b[^{}]*?\{[^}]*\})'
    
    # Find all matching CSS rules
    matching_rules = re.findall(pattern, css_content, re.MULTILINE)

    return matching_rules

# Example usage
  # Path to your CSS file
matching_css_rules = extract_css_rules(css_file_path, words_to_match)

# Print the matching CSS rules
for rule in matching_css_rules:
    print(rule)

