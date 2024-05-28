import React from 'react';
import PropTypes from 'prop-types';
import ReactTagInput from '@pathofdev/react-tag-input';

const GKTagsInput = ({ defaultTags, onAddTag, onRemoveTag }) => {
    return (
        <ReactTagInput
            tags={defaultTags}
            onChange={(newTags) => {
                const addedTag = newTags.find(tag => !defaultTags.includes(tag));
                const removedTag = defaultTags.find(tag => !newTags.includes(tag));
                if (addedTag) {
                    onAddTag(addedTag);
                }
                if (removedTag) {
                    const indexToRemove = defaultTags.indexOf(removedTag);
                    onRemoveTag(indexToRemove);
                }
            }}
        />
    );
};

GKTagsInput.propTypes = {
    defaultTags: PropTypes.arrayOf(PropTypes.string),
    onAddTag: PropTypes.func.isRequired,
    onRemoveTag: PropTypes.func.isRequired
};

GKTagsInput.defaultProps = {
    defaultTags: []
};

export default GKTagsInput;
