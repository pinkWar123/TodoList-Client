import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { Popover } from 'react-bootstrap';

function EmojiPopover() {
    return (
        <Popover id="popover">
            <Picker data={data} onEmojiSelect={console.log} />
        </Popover>
    );
}

export default EmojiPopover;
