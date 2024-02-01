import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { Popover } from 'react-bootstrap';

function EmojiPopover(onEmojiSelect) {
    return (
        <Popover id="popover">
            <Picker
                data={data}
                onEmojiSelect={(emoji) => {
                    onEmojiSelect(emoji.native);
                }}
            />
        </Popover>
    );
}

export default EmojiPopover;
