import re


class Chunker:
    def __init__(self):
        # Get the API key from the environment
        self.filename = "PenaltyBoxIII-OperatingManual.pdf"

    def group_words(self, words, group_size=100):
        grouped_words = {}
        group = []
        key_counter = 1
        word_count = 0

        for word in words:
            group.append(word)
            word_count += 1

            # Check if we have reached the group size or if the word ends with a period
            if word_count >= group_size and word.endswith("."):
                # Join the words in the group with a space and add to the dictionary
                grouped_words[f"group_{key_counter}"] = " ".join(group)
                key_counter += 1
                group = []
                word_count = 0

        # Add any remaining words as the last group
        if group:
            grouped_words[f"group_{key_counter}"] = " ".join(group)

        return grouped_words

    def clean_text(self, text):
        # Remove multiple periods and other special characters
        text = re.sub(r"\.{2,}", "", text)
        # Replace multiple spaces with a single space
        text = re.sub(r"\s{2,}", " ", text)
        text = re.sub(r"\s+([,.?!:;)’”])", r"\1", text)
        text = re.sub(r"\(\s+", "(", text)
        text = re.sub(r"‘ ", "'", text)
        text = re.sub(r"“ ", "“", text)

        # Strip leading and trailing whitespace

        text = text.strip()
        return text

    def clean_groups(self, grouped_dict):
        cleaned_dict = {}
        for key, value in grouped_dict.items():
            cleaned_dict[key] = self.clean_text(value)
        return cleaned_dict
