import React, { useState, Fragment, useContext, useEffect } from "react";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { DrawerContext } from "../../../contexts/DrawerContext.js";
// Components
import { Navbar, FlexBox, IconLinkButton, Tag } from "../../styled-elements";
import DrawerContainer from "./drawer";
import { useFetch } from "../../hooks/useFetch";
import { TagSkeleton } from "../skeleton";
// MUI components
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery, useTheme } from "@material-ui/core";
// Constants
import * as ASSETS from "../../../constants/asset";
import * as ROUTES from "../../../constants/route";
import * as BREAK from "../../../constants/breakpoint";

function NavbarDesktop({ animatedElement, ...restProps }) {
	const [active, setActive] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const [navStatus, setNavStatus] = useState({
		show: true,
		scrollPos: 0,
	});
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const { breakPoint, location } = useContext(UtilityContext);

	const [categories, setCategories] = useState([]);
	const res = useFetch("/categories?limit=15&page=1");

	useEffect(() => {
		if (res.response != null) {
			setCategories(res.response.data.categories);
		}
	}, [res]);

	useEffect(() => {
		setIsExpanded(location.pathname === ROUTES.BLOG);
		const handleScroll = () => {
			const BoundingClientRectTop = document.body.getBoundingClientRect().top;
			if (BoundingClientRectTop < -500) {
				setNavStatus({
					scrollPos: BoundingClientRectTop,
					show: BoundingClientRectTop > navStatus.scrollPos,
				});
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname, navStatus.scrollPos]);

	return (
		<Fragment>
			<Navbar
				{...restProps}
				height={breakPoint >= 600 ? (isExpanded ? "100px" : "75px") : "75px"}
				variants={animatedElement.Navbar(
					breakPoint >= 600 ? (isExpanded ? 55 : 75) : 75
				)}
				direction={"column"}
				animate={navStatus.show ? "hidden" : "show"}
				style={{ position: isExpanded === true ? "sticky" : "fixed" }}
			>
				<FlexBox justify="space-between" style={{ width: "100%" }}>
					<FlexBox>
						<Navbar.Logo src={ASSETS.LOGO_BUBBLE} />
						<Navbar.Header>
							{useMediaQuery("(max-width:1050px)")
								? "RMIT DSC"
								: "RMIT DEVELOPER STUDENT CLUB"}
						</Navbar.Header>
						<FlexBox.FlexBasis width="30px" />
						{useMediaQuery(`(min-width:${BREAK.smartphone_sm}px)`) && (
							<Navbar.SearchBar>
								<Navbar.Input
									onFocus={() => setActive(true)}
									onBlur={() => setActive(false)}
									active={breakPoint > BREAK.desktop_sm ? active : false}
									placeholder="Search…"
								/>
								<Navbar.Icon icon={faSearch} className="__search" />
							</Navbar.SearchBar>
						)}
					</FlexBox>
					<FlexBox>
						{useMediaQuery(`(min-width: ${BREAK.tablet_xs}px)`) ? (
							<Fragment>
								{breakPoint <= BREAK.tablet_md
									? ROUTES.listOfRoutes.map((item) => (
											<IconLinkButton
												src={item.icon}
												route={item.route}
												title={item.text}
											/>
									  ))
									: ROUTES.listOfRoutes.map((item) => (
											<Navbar.Link to={item.route}>{item.text}</Navbar.Link>
									  ))}

								<Navbar.Link to={ROUTES.LOG_IN}>Log In</Navbar.Link>
							</Fragment>
						) : (
							<Fragment>
								<IconLinkButton
									src={faBars}
									onClick={() => setOpenMenu(true)}
									style={{ margin: "0px 10px 0px 5px" }}
									route="#"
									title={"Menu"}
								/>
							</Fragment>
						)}
					</FlexBox>
				</FlexBox>
				{useMediaQuery(theme.breakpoints.up("sm")) && isExpanded ? (
					<FlexBox justify="unset" className="__category_navbar">
						{categories.length !== 0 ? (
							categories.map((category) => (
								<Tag.Item key={category._id}>{category.title}</Tag.Item>
							))
						) : (
							<TagSkeleton />
						)}
					</FlexBox>
				) : null}
			</Navbar>
			<DrawerContext.Provider value={{ openMenu, setOpenMenu }}>
				{breakPoint < BREAK.tablet_xs && <DrawerContainer />}
			</DrawerContext.Provider>
		</Fragment>
	);
}

export default NavbarDesktop;
