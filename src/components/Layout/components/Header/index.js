import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                // hanle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/@logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy trigger="click" content="upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="data:image/jpeg;base64,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1"
                                alt="Nguyen van a"
                                fallBack="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
