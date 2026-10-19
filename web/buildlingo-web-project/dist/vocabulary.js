/* Original English learning content. IPA represents a common US pronunciation. */
(() => {
const categories = [
{id:'structure',name:'Structure & framing',icon:'structure',color:'#7e916b',bg:'#eaf0e2',description:'The bones of a building'},
{id:'roofing',name:'Roofing & insulation',icon:'roof',color:'#ac805f',bg:'#f5eade',description:'From rafters to ridge caps'},
{id:'materials',name:'Building materials',icon:'bricks',color:'#a5826a',bg:'#f3eade',description:'What a home is made of'},
{id:'plumbing',name:'Plumbing & drainage',icon:'droplet',color:'#6b9295',bg:'#e5eeec',description:'Every pipe, valve, and fitting'},
{id:'electrical',name:'Electrical & lighting',icon:'bolt',color:'#b59b5c',bg:'#f5efda',description:'The language of power'},
{id:'kitchen',name:'Kitchen & laundry',icon:'kitchen',color:'#8a9a70',bg:'#ecf0e0',description:'Appliances and everyday spaces'},
{id:'bathroom',name:'Bathroom fixtures',icon:'bath',color:'#779ba0',bg:'#e6eff0',description:'Beyond the sink and shower'},
{id:'rooms',name:'Rooms & furniture',icon:'sofa',color:'#a38a78',bg:'#f2eae2',description:'Make yourself at home'},
{id:'openings',name:'Doors & windows',icon:'window',color:'#7d9487',bg:'#e8eee8',description:'All the little moving parts'},
{id:'exterior',name:'Garden & exterior',icon:'leaf',color:'#85975e',bg:'#edf0df',description:'Step outside and explore'},
{id:'tools',name:'Tools & fasteners',icon:'tools',color:'#9c8c70',bg:'#f0ece1',description:'Know your way around a toolbox'},
{id:'actions',name:'Construction actions',icon:'hammer',color:'#a88660',bg:'#f5ebdf',description:'The words that get work done'},
{id:'plans',name:'Architecture & plans',icon:'ruler',color:'#7a91a0',bg:'#e7edf1',description:'Read the language of design'},
{id:'problems',name:'Repairs & problems',icon:'wrench',color:'#ae876e',bg:'#f6eade',description:'Describe what needs fixing'},
{id:'climate',name:'Heating & ventilation',icon:'wind',color:'#84978a',bg:'#e8eee7',description:'Comfort, airflow, and temperature'},
{id:'safety',name:'People & worksite',icon:'helmet',color:'#a69a69',bg:'#f2efdf',description:'The people and places behind it'}
];
const raw = `
@structure
Brace|breɪs|A member that strengthens a structure by resisting movement or distortion.|Diagonal braces stabilize the frame.
Sheathing|ˈʃiːðɪŋ|Panels or boards fixed over framing to form a structural or protective surface.|Plywood sheathing covers the roof rafters.
Balustrade|ˈbæləstreɪd|A complete railing system made of a handrail and its supporting balusters.|A timber balustrade surrounds the landing.
Foundation|faʊnˈdeɪʃən|The lowest supporting part of a building, which transfers its weight to the ground.|The engineer checked the foundation before construction began.
Footing|ˈfʊtɪŋ|A widened base beneath a wall or column that spreads its load over the soil.|The concrete footing is wider than the wall above it.
Slab|slæb|A broad, flat piece of concrete used as a floor, roof, or foundation.|The ground floor sits on a concrete slab.
Beam|biːm|A horizontal structural member that supports loads above it.|A steel beam spans the opening above the kitchen.
Column|ˈkɑːləm|A vertical structural member that carries loads down to a foundation.|The entrance has two stone columns.
Joist|dʒɔɪst|One of several parallel members that support a floor or ceiling.|The floorboards are attached to wooden joists.
Stud|stʌd|An upright framing member inside a wall.|The carpenter located a stud behind the drywall.
Load-bearing wall|ˈloʊd ˌberɪŋ wɔːl|A wall that supports structural loads in addition to its own weight.|The plans identify this as a load-bearing wall.
Partition wall|pɑːrˈtɪʃən wɔːl|An interior wall that divides a space without carrying the main structural loads.|A partition wall separates the office from the bedroom.
Framing|ˈfreɪmɪŋ|The arrangement of structural members that forms a building's skeleton.|The crew finished the timber framing last week.
Lintel|ˈlɪntəl|A horizontal support placed above a door or window opening.|A concrete lintel supports the brickwork above the window.
Header|ˈhedər|A framing member that carries loads across an opening.|The carpenter installed a header above the doorway.
Subfloor|ˈsʌbflɔːr|The structural floor layer beneath the finished flooring.|The damaged subfloor was replaced before the new tiles were laid.
Floorboard|ˈflɔːrbɔːrd|A long wooden board used as part of a floor.|One floorboard creaks when I walk across the room.
Staircase|ˈsterkeɪs|A complete set of stairs and its supporting structure.|The staircase connects the ground floor to the bedrooms.|stairs
Tread|tred|The horizontal part of a stair that you step on.|Each wooden tread has a rounded front edge.
Riser|ˈraɪzər|The vertical face between two stair treads.|The risers are painted white.
Landing|ˈlændɪŋ|A level platform at the top, bottom, or between sections of stairs.|There is a small window beside the upstairs landing.
Handrail|ˈhændreɪl|A rail that people hold for support along stairs or a ramp.|The handrail runs along the left side of the staircase.
Baluster|ˈbæləstər|A short vertical member that supports a railing.|The staircase has wooden balusters.
Ceiling|ˈsiːlɪŋ|The overhead interior surface of a room.|The ceiling is painted a warm shade of white.
Wall|wɔːl|A vertical surface that encloses or divides a building.|We hung the picture on the living room wall.
Floor|flɔːr|The lower surface of a room, or a level of a building.|The kitchen floor is covered with ceramic tiles.
Crawl space|ˈkrɔːl speɪs|A low, unfinished space beneath the lowest floor of some buildings.|The pipes run through the crawl space.
@roofing
Hip roof|hɪp ruːf|A roof with sloping surfaces on all sides.|The house has a tiled hip roof.
Dormer|ˈdɔːrmər|A roofed projection containing a window that extends from a sloping roof.|A dormer brings daylight into the attic room.
Vapor barrier|ˈveɪpər ˈbæriər|A material layer that strongly restricts the passage of water vapor.|The wall section identifies the position of the vapor barrier.|vapour barrier (UK)
Roof|ruːf|The upper covering of a building that protects it from the weather.|The roof keeps rain out of the house.
Pitched roof|pɪtʃt ruːf|A roof with one or more sloping surfaces.|The cottage has a steep pitched roof.
Flat roof|flæt ruːf|A roof with a nearly level surface and a small slope for drainage.|The extension has a flat roof.
Gable|ˈɡeɪbəl|The triangular upper part of a wall beneath two sloping roof surfaces.|There is a small window in the gable.
Ridge|rɪdʒ|The highest horizontal line where two sloping roof surfaces meet.|A vent runs along the ridge of the roof.
Rafter|ˈræftər|A sloping structural member that supports a roof covering.|The attic has exposed wooden rafters.
Truss|trʌs|A rigid framework, often triangular, that supports a roof or other structure.|The roof trusses were lifted into position.
Eaves|iːvz|The lower edges of a roof that project beyond the walls.|The eaves help shelter the windows from rain.
Soffit|ˈsɑːfɪt|The underside of an overhang, such as the projecting edge of a roof.|The soffit has vents that allow air into the attic.
Fascia|ˈfeɪʃə|A board or band along a roof edge, often supporting the gutter.|The gutter is fixed to the fascia.
Gutter|ˈɡʌtər|A channel along the roof edge that collects rainwater.|Leaves have collected in the gutter.
Downspout|ˈdaʊnspaʊt|A vertical pipe that carries rainwater from a gutter toward the ground.|Rainwater flows down the downspout.|downpipe (UK)
Roof tile|ruːf taɪl|An overlapping piece of clay, concrete, or another material used to cover a roof.|Several clay roof tiles need replacing.
Shingle|ˈʃɪŋɡəl|A thin, overlapping piece of roofing material.|The wind lifted a few shingles near the ridge.
Flashing|ˈflæʃɪŋ|Thin waterproof material used to seal joints around roof openings and intersections.|Metal flashing surrounds the base of the chimney.
Chimney|ˈtʃɪmni|A vertical structure that carries smoke or combustion gases above a building.|Smoke rose from the brick chimney.
Skylight|ˈskaɪlaɪt|A window installed in a roof to admit daylight.|The skylight makes the upstairs hallway brighter.
Attic|ˈætɪk|The space inside a building directly beneath the roof.|We store spare furniture in the attic.|loft (UK, in this sense)
Insulation|ˌɪnsəˈleɪʃən|Material that reduces the transfer of heat, sound, or electricity.|The attic insulation helps keep the house warm.
Underlayment|ˈʌndərleɪmənt|A protective or supporting layer beneath a roof covering or finished floor.|The roofer fitted underlayment beneath the shingles.
@materials
Waterproofing|ˈwɔːtərpruːfɪŋ|Materials or treatment used to prevent water from penetrating a structure or surface.|The bathroom renovation includes new waterproofing.
Caulk|kɔːk|A flexible sealing material used to fill joints and gaps.|The old caulk around the bathtub is discolored.
Aggregate|ˈæɡrɪɡət|Granular material such as sand, gravel, or crushed stone used in construction mixtures.|The concrete contains coarse and fine aggregate.
Adhesive|ədˈhiːsɪv|A substance used to bond surfaces or materials together.|The tiles are fixed with a suitable adhesive.
Concrete block|ˈkɑːnkriːt blɑːk|A manufactured concrete unit used in masonry construction.|The utility room walls are built from concrete blocks.
Brick|brɪk|A small rectangular building block, often made from fired clay.|The garden wall is made of red brick.
Concrete|ˈkɑːnkriːt|A building material made by mixing cement, water, and aggregates such as sand and gravel.|The driveway is made of concrete.
Cement|sɪˈment|A powdered binder that hardens when mixed with water and is used in concrete and mortar.|Cement is one ingredient in concrete.
Mortar|ˈmɔːrtər|A workable mixture used to bond bricks, blocks, or stones together.|The mason spread mortar between the bricks.
Grout|ɡraʊt|Material used to fill joints between tiles or certain gaps in construction.|The grout between the bathroom tiles is white.
Rebar|ˈriːbɑːr|Steel bars placed inside concrete to help reinforce it.|The workers tied the rebar before pouring the concrete.
Drywall|ˈdraɪwɔːl|Panels with a gypsum core used to finish interior walls and ceilings.|The interior walls are covered with drywall.|plasterboard (UK)
Plaster|ˈplæstər|A material applied as a wet paste that hardens into a smooth wall or ceiling finish.|The plaster around the window has cracked.
Joint compound|dʒɔɪnt ˈkɑːmpaʊnd|A paste used to finish drywall seams and cover fasteners.|Joint compound covers the taped seams.
Spackle|ˈspækəl|A filling compound commonly used for small holes and minor surface repairs.|She filled the nail holes with spackle.
Plywood|ˈplaɪwʊd|A board made from thin layers of wood bonded together.|The cabinet has a plywood back panel.
Lumber|ˈlʌmbər|Wood cut into boards or other sizes for construction.|The lumber arrived at the construction site.|timber (UK, often)
Hardwood|ˈhɑːrdwʊd|Wood from broad-leaved trees, often used for flooring and furniture.|The living room has an oak hardwood floor.
Laminate flooring|ˈlæmɪnət ˈflɔːrɪŋ|Layered flooring with a decorative surface that can resemble wood or stone.|We chose gray laminate flooring for the office.
Ceramic tile|səˈræmɪk taɪl|A fired-clay tile used to cover walls or floors.|Ceramic tiles cover the kitchen backsplash.
Porcelain tile|ˈpɔːrsəlɪn taɪl|A dense type of ceramic tile with low water absorption.|The bathroom floor is finished with porcelain tile.
Glass|ɡlæs|A hard, usually transparent material used in windows and doors.|The glass in the patio door is clear.
Steel|stiːl|An iron-based alloy widely used for structural members and fasteners.|Steel columns support the upper floor.
Gravel|ˈɡrævəl|Small pieces of stone used in concrete, landscaping, and drainage.|The path is covered with gravel.
Sand|sænd|Small grains of rock used in mortar, concrete, and other mixtures.|The builder ordered another load of sand.
Sealant|ˈsiːlənt|A material used to close gaps and resist the passage of water or air.|A flexible sealant fills the joint around the bathtub.
Primer|ˈpraɪmər|A preparatory coating applied before paint or another finish.|The painter applied primer to the new drywall.
Paint|peɪnt|A liquid coating that adds color and protection to a surface.|We selected washable paint for the kitchen.
Wallpaper|ˈwɔːlpeɪpər|Decorative paper or similar material applied to interior walls.|The bedroom has patterned wallpaper.
@plumbing
Union|ˈjuːnjən|A pipe fitting that allows sections to be disconnected without rotating the connected pipes.|The union provides a removable connection beside the valve.
Backflow|ˈbækfloʊ|The unintended reverse flow of liquid within a piping system.|The inspector checked the system's protection against backflow.
Hose bib|hoʊz bɪb|An outdoor faucet with a connection for a hose.|The garden hose is connected to the hose bib.|outdoor tap (UK); spigot (US)
Plumbing|ˈplʌmɪŋ|The system of pipes, fixtures, and fittings that supplies water and removes wastewater.|The plumbing was updated during the renovation.
Pipe|paɪp|A hollow tube used to carry water, gas, or another fluid.|A copper pipe runs behind the wall.
Water supply line|ˈwɔːtər səˈplaɪ laɪn|A pipe or tube that brings water to a building or fixture.|The water supply line connects to the kitchen faucet.
Drain|dreɪn|An opening or passage through which liquid flows away.|Water disappears through the shower drain.
Drainpipe|ˈdreɪnpaɪp|A pipe that carries wastewater or other drainage away.|The drainpipe runs from the sink into the wall.
Sewer|ˈsuːər|A pipe or underground system that carries sewage.|The house is connected to the city sewer.
Sewage|ˈsuːɪdʒ|Wastewater and waste matter carried away through drains and sewers.|The treatment plant processes sewage.
Faucet|ˈfɔːsɪt|A fixture that controls the flow of water from a pipe.|Turn the faucet off after washing your hands.|tap (UK)
Shutoff valve|ˈʃʌtɔːf vælv|A valve used to stop the flow of water or another fluid.|The sink has a shutoff valve below the cabinet.
Main shutoff valve|meɪn ˈʃʌtɔːf vælv|The valve that controls the main water supply to a building.|The plumber located the main shutoff valve.
Check valve|tʃek vælv|A valve designed to allow fluid to flow in only one direction.|A check valve helps prevent reverse flow.
Pressure regulator|ˈpreʃər ˈreɡjəleɪtər|A device that reduces or controls fluid pressure.|A pressure regulator is fitted on the incoming water line.
Water pressure|ˈwɔːtər ˈpreʃər|The force exerted by water within a pipe or system.|The upstairs shower has low water pressure.
Water meter|ˈwɔːtər ˈmiːtər|A device that measures how much water passes through a supply line.|The water meter shows the household's usage.
Water tank|ˈwɔːtər tæŋk|A container used to store water.|The water tank is located above the utility room.
Water heater|ˈwɔːtər ˈhiːtər|An appliance that heats water for domestic use.|The water heater supplies hot water to the bathroom.
P-trap|ˈpiː træp|A curved drain fitting that retains water to form a seal against sewer gases.|The P-trap is visible below the bathroom sink.
Elbow|ˈelboʊ|A pipe fitting that changes the direction of a pipeline.|A ninety-degree elbow turns the pipe toward the wall.
Tee|tiː|A T-shaped fitting that joins three pipe sections.|The tee connects the branch line to the main pipe.
Coupling|ˈkʌplɪŋ|A fitting used to join two pipe or tube sections.|The plumber used a coupling to join the two pipes.
Adapter|əˈdæptər|A fitting that connects different types or sizes of connections.|This adapter connects the hose to the faucet.
Reducer|rɪˈduːsər|A fitting that connects pipes of different diameters.|A reducer joins the larger pipe to the smaller one.
Thread|θred|A spiral ridge or groove that allows parts to screw together.|The fitting has a thread on its outer surface.
Washer|ˈwɑːʃər|A small flat ring or disc that spreads load or helps form a seal.|The plumber replaced a worn rubber washer.
Gasket|ˈɡæskɪt|A sealing piece placed between two joined surfaces.|A rubber gasket seals the connection.
O-ring|ˈoʊ rɪŋ|A circular sealing ring with a round cross-section.|The valve has a small O-ring inside it.
PTFE tape|ˌpiː tiː ef ˈiː teɪp|A thin sealing tape used on certain threaded pipe connections.|A roll of PTFE tape is in the plumber's toolbox.|thread seal tape
Flexible supply hose|ˈfleksəbəl səˈplaɪ hoʊz|A bendable hose that supplies water to a fixture or appliance.|A flexible supply hose connects the toilet to the valve.
Cleanout|ˈkliːnaʊt|An access point used to inspect or clear a drainage pipe.|The cleanout has a removable cap.
Vent pipe|vent paɪp|A pipe that allows air movement within a drainage system and vents gases outside.|The vent pipe extends above the roof.
Septic tank|ˈseptɪk tæŋk|An underground tank that provides initial treatment of household wastewater.|The rural house uses a septic tank.
Sump pump|ˈsʌmp pʌmp|A pump that removes collected water from a low pit.|The sump pump removes water from the basement pit.
@electrical
Electrical outlet|ɪˈlektrɪkəl ˈaʊtlet|A connection point into which an appliance plug is inserted.|There is an electrical outlet beside the desk.|socket (UK); receptacle (US technical)
Light switch|laɪt swɪtʃ|A device used to turn a light on or off.|The light switch is next to the door.
Dimmer switch|ˈdɪmər swɪtʃ|A control that adjusts the brightness of compatible lights.|The dining room has a dimmer switch.
Circuit breaker|ˈsɜːrkɪt ˈbreɪkər|A protective device that opens an electrical circuit when specified fault conditions occur.|A circuit breaker in the panel has tripped.
Electrical panel|ɪˈlektrɪkəl ˈpænəl|An enclosure that distributes power to circuits and contains protective devices.|The electrical panel is in the utility room.|breaker panel (US); consumer unit (UK, common domestic type)
Fuse|fjuːz|A protective component whose element melts to interrupt excessive current.|The electrician replaced a blown fuse.
Wire|waɪər|A slender metal conductor, usually covered with insulation in household wiring.|The electrician inspected the insulated wire.
Cable|ˈkeɪbəl|An assembly of one or more insulated conductors with a protective covering.|The cable runs through the ceiling space.
Conduit|ˈkɑːnduɪt|A tube or channel used to route and protect electrical wiring.|The wires are enclosed in metal conduit.
Junction box|ˈdʒʌŋkʃən bɑːks|An enclosure that contains and protects electrical connections.|The cable connections are inside a junction box.
Ground wire|ɡraʊnd waɪər|A conductor that provides a protective connection to ground.|The diagram identifies the ground wire.|earth wire (UK)
Plug|plʌɡ|A connector with pins or blades that fits into an electrical outlet.|The lamp's plug is behind the sofa.
Extension cord|ɪkˈstenʃən kɔːrd|A flexible power cable with a plug at one end and an outlet at the other.|The extension cord is stored in the garage.|extension lead (UK)
Light bulb|laɪt bʌlb|A replaceable device that produces light when supplied with electricity.|The lamp needs a new light bulb.
Light fixture|laɪt ˈfɪkstʃər|A complete fitting that holds or contains a light source.|The ceiling light fixture has three bulbs.|light fitting (UK)
Pendant light|ˈpendənt laɪt|A light fixture suspended from the ceiling by a cord, rod, or chain.|A pendant light hangs over the kitchen island.
Recessed light|rɪˈsest laɪt|A light fixture set into a ceiling or another surface.|Recessed lights illuminate the hallway.|downlight
LED|ˌel iː ˈdiː|A light-emitting diode, a semiconductor device used as a light source.|The new desk lamp uses an LED.
Voltage|ˈvoʊltɪdʒ|The electrical potential difference between two points.|The label states the appliance's rated voltage.
Current|ˈkɜːrənt|The rate at which electric charge flows through a circuit.|The meter measures electrical current in amperes.
GFCI outlet|ˌdʒiː ef siː ˈaɪ ˈaʊtlet|An outlet with a ground-fault circuit interrupter that helps protect against electric shock.|The GFCI outlet has test and reset buttons.|RCD protection (related UK term, not the same device)
Solar panel|ˈsoʊlər ˈpænəl|A panel that collects sunlight to produce electricity or heat.|Photovoltaic solar panels are fitted to the roof.
@kitchen
Kitchen|ˈkɪtʃən|A room or area used for preparing and cooking food.|The kitchen opens onto the dining room.
Sink|sɪŋk|A basin with a water supply and drain used for washing.|The kitchen sink is full of dishes.
Countertop|ˈkaʊntərtɑːp|The flat working surface on top of a cabinet or counter.|The countertop is made of polished stone.|worktop (UK)
Backsplash|ˈbæksplæʃ|A protective wall surface behind a sink or cooking area.|The backsplash has green ceramic tiles.|splashback (UK)
Cabinet|ˈkæbɪnət|A storage unit with shelves or compartments, usually enclosed by doors.|The plates are stored in the upper cabinet.
Drawer|drɔːr|A sliding, open-topped storage compartment.|The cutlery is in the top drawer.
Kitchen island|ˈkɪtʃən ˈaɪlənd|A freestanding counter unit with space around it in a kitchen.|Two stools stand beside the kitchen island.
Stove|stoʊv|A cooking appliance, typically with burners and often an oven.|A pot of soup is on the stove.|cooker (UK, often)
Cooktop|ˈkʊktɑːp|A cooking surface with burners or heating elements, separate from an oven.|The induction cooktop is built into the counter.|hob (UK)
Oven|ˈʌvən|An enclosed appliance or compartment used for baking and roasting.|The oven is beneath the cooktop.
Range hood|reɪndʒ hʊd|A device above a cooking surface that captures cooking fumes and vapors.|The range hood has a removable filter.|extractor hood (UK)
Refrigerator|rɪˈfrɪdʒəreɪtər|An appliance that keeps food cool.|The milk is in the refrigerator.|fridge
Freezer|ˈfriːzər|An appliance or compartment that stores food below its freezing point.|The frozen vegetables are in the freezer.
Dishwasher|ˈdɪʃwɑːʃər|A machine that washes dishes and utensils.|The dishwasher is next to the sink.
Microwave|ˈmaɪkroʊweɪv|An appliance that heats food using microwave energy.|The microwave sits on a shelf.
Pantry|ˈpæntri|A cupboard or room used for storing food and kitchen supplies.|We keep flour and rice in the pantry.
Garbage disposal|ˈɡɑːrbɪdʒ dɪˈspoʊzəl|A powered device under a sink that grinds certain food waste.|The garbage disposal is fitted beneath the drain.|waste disposal unit (UK)
Washing machine|ˈwɑːʃɪŋ məˈʃiːn|An appliance that washes clothes and other textiles.|The washing machine is in the laundry room.
Dryer|ˈdraɪər|An appliance that removes moisture from clothes.|The towels are in the dryer.|tumble dryer (UK)
Laundry room|ˈlɔːndri ruːm|A room where clothes are washed and sometimes dried.|The laundry room has a sink and a washing machine.
@bathroom
Bathroom|ˈbæθruːm|A room containing washing facilities, often with a toilet.|The upstairs bathroom has a bathtub.
Toilet|ˈtɔɪlət|A fixture used for receiving and flushing human waste.|The toilet is beside the washbasin.
Toilet bowl|ˈtɔɪlət boʊl|The lower basin-shaped part of a toilet.|Water remains in the toilet bowl after flushing.
Toilet seat|ˈtɔɪlət siːt|The hinged seat fitted over a toilet bowl.|The toilet seat has a soft-close hinge.
Toilet tank|ˈtɔɪlət tæŋk|The reservoir that stores water for flushing a toilet.|The toilet tank is mounted behind the bowl.|cistern (UK)
Flush button|flʌʃ ˈbʌtən|A button that activates a toilet's flushing mechanism.|The toilet has a dual-flush button.
Flush valve|flʌʃ vælv|A valve that releases water to flush a toilet or similar fixture.|The flush valve is inside the toilet tank.
Fill valve|fɪl vælv|A valve that controls the water refilling a toilet tank.|The fill valve shuts when the tank reaches its set level.
Float|floʊt|A buoyant component that moves with the water level to operate a control.|The float rises as the tank fills.
Overflow tube|ˈoʊvərfloʊ tuːb|A tube that carries excess water away if it rises too high.|The overflow tube is inside the toilet tank.
Bathtub|ˈbæθtʌb|A large container that holds water for bathing.|The bathtub is fitted against the wall.|bath (UK)
Shower|ˈʃaʊər|A washing fixture or area where water sprays over the body.|The shower is enclosed by a glass screen.
Showerhead|ˈʃaʊərhed|The perforated fitting from which shower water sprays.|The showerhead is mounted above the bathtub.
Shower screen|ˈʃaʊər skriːn|A panel that limits water splashing out of a shower.|The shower screen is made of glass.
Washbasin|ˈwɑːʃbeɪsən|A basin used for washing hands and face.|The washbasin is mounted on a vanity.|bathroom sink
Vanity|ˈvænəti|A bathroom cabinet or unit that supports a washbasin and often provides storage.|The vanity has two drawers.
Towel rail|ˈtaʊəl reɪl|A horizontal bar used for hanging towels.|A towel rail is fixed beside the shower.|towel bar (US)
Mirror|ˈmɪrər|A reflective surface used to see an image of yourself or a space.|A round mirror hangs above the basin.
@rooms
Living room|ˈlɪvɪŋ ruːm|A room used for relaxing and spending time with others.|The living room has a large sofa.
Bedroom|ˈbedruːm|A room used for sleeping.|The main bedroom faces the garden.
Dining room|ˈdaɪnɪŋ ruːm|A room primarily used for eating meals.|The dining room seats six people.
Hallway|ˈhɔːlweɪ|An interior passage connecting rooms.|The hallway leads to the kitchen.
Home office|hoʊm ˈɔːfɪs|A room or area in a home used for work.|My home office has two desks.
Basement|ˈbeɪsmənt|A level of a building that is partly or completely below ground.|The basement is used for storage.
Garage|ɡəˈrɑːʒ|A building or enclosed area used to keep vehicles.|The garage has space for one car.
Utility room|juːˈtɪləti ruːm|A room used for household equipment and service tasks.|The utility room contains the water heater.
Sofa|ˈsoʊfə|A padded seat designed for more than one person.|The sofa faces the fireplace.|couch
Armchair|ˈɑːrmtʃer|A comfortable chair with supports for the arms.|An armchair stands beside the window.
Coffee table|ˈkɔːfi ˌteɪbəl|A low table usually placed in front of a sofa.|There are books on the coffee table.
Dining table|ˈdaɪnɪŋ ˌteɪbəl|A table used for eating meals.|The dining table is made of oak.
Bed|bed|A piece of furniture used for sleeping.|The bed is against the far wall.
Mattress|ˈmætrəs|A thick, padded sleeping surface placed on a bed.|The mattress fits inside the bed frame.
Wardrobe|ˈwɔːrdroʊb|A tall cabinet used for storing clothes.|The wardrobe has sliding doors.
Closet|ˈklɑːzət|A small enclosed storage space, usually built into a room.|The bedroom closet has shelves and a hanging rail.
Desk|desk|A table used for work, writing, or studying.|My desk is 1.2 meters wide.
Bookshelf|ˈbʊkʃelf|A shelf or set of shelves for storing books.|The bookshelf is beside the desk.
Rug|rʌɡ|A movable piece of thick floor covering.|A wool rug lies under the coffee table.
Curtains|ˈkɜːrtənz|Fabric panels hung over windows or openings.|The curtains block the afternoon sun.|drapes (US, often heavier curtains)
@openings
Trim|trɪm|Finishing strips or decorative pieces around doors, windows, and other edges.|The door trim matches the baseboards.
Baseboard|ˈbeɪsbɔːrd|A strip of trim covering the joint between an interior wall and the floor.|The baseboard is painted white.|skirting board (UK)
Door|dɔːr|A movable panel used to open or close an entrance.|The front door is painted green.
Doorway|ˈdɔːrweɪ|The opening through which a door provides access.|The doorway is wide enough for the cabinet.
Door frame|ˈdɔːr freɪm|The fixed structure surrounding and supporting a door.|The door frame is made of wood.
Door jamb|ˈdɔːr dʒæm|One of the vertical sides of a door frame.|The hinge is attached to the door jamb.
Threshold|ˈθreʃhoʊld|The strip or raised part across the bottom of a doorway.|Rainwater collected near the threshold.
Hinge|hɪndʒ|A joint that allows a door, lid, or panel to pivot.|The door hinge squeaks.
Doorknob|ˈdɔːrnɑːb|A round handle used to open or close a door.|The doorknob is made of brass.
Latch|lætʃ|A fastening mechanism that holds a door or gate closed.|The gate latch clicks into place.
Deadbolt|ˈdedboʊlt|A lock with a solid bolt that extends into a frame without spring action.|The front door has a separate deadbolt.
Sliding door|ˈslaɪdɪŋ dɔːr|A door that opens by moving sideways along a track.|A sliding door leads to the patio.
Window|ˈwɪndoʊ|An opening fitted with glass or another transparent material to admit light.|The window overlooks the garden.
Window frame|ˈwɪndoʊ freɪm|The fixed structure that surrounds and supports a window.|The window frame is painted white.
Windowpane|ˈwɪndoʊpeɪn|A single sheet of glass in a window.|One windowpane has a small crack.
Windowsill|ˈwɪndoʊsɪl|The ledge at the bottom of a window opening.|There is a plant on the windowsill.
Casement window|ˈkeɪsmənt ˈwɪndoʊ|A window with a sash hinged along one side.|The casement window opens outward.
Double glazing|ˈdʌbəl ˈɡleɪzɪŋ|A window system using two panes of glass separated by a sealed gap.|Double glazing helps reduce heat transfer and noise.
Blinds|blaɪndz|Window coverings that can be raised, lowered, or adjusted to control light.|The blinds are partly closed.
Weatherstripping|ˈweðərstrɪpɪŋ|Material fitted around doors or windows to reduce air and water leakage.|The weatherstripping around the door is worn.
@exterior
Facade|fəˈsɑːd|An exterior face of a building, especially its principal front.|The facade combines brick and timber cladding.
Porch|pɔːrtʃ|A covered area at an entrance to a building.|Two chairs sit on the front porch.
Patio|ˈpætioʊ|A paved outdoor area used for sitting or dining.|We eat outside on the patio.
Deck|dek|An outdoor platform, often made of wood or composite boards.|The deck extends into the back garden.
Balcony|ˈbælkəni|A platform projecting from an upper story, enclosed by a railing.|The bedroom opens onto a small balcony.
Driveway|ˈdraɪvweɪ|A private access route from a road to a house or garage.|A car is parked in the driveway.
Walkway|ˈwɔːkweɪ|A path designed for people to walk along.|A stone walkway leads to the front door.
Fence|fens|A barrier that marks or encloses an outdoor area.|A wooden fence surrounds the yard.
Gate|ɡeɪt|A movable barrier across an opening in a fence or wall.|The garden gate opens onto the path.
Lawn|lɔːn|An area of ground covered with closely cut grass.|The lawn needs mowing.
Hedge|hedʒ|A row of closely planted shrubs forming a boundary or screen.|A tall hedge provides privacy.
Flower bed|ˈflaʊər bed|An area of soil used for growing flowers.|There is a flower bed beside the porch.
Shed|ʃed|A small building used for storage or work.|The garden tools are kept in the shed.
Retaining wall|rɪˈteɪnɪŋ wɔːl|A wall designed to hold back soil or another material.|A retaining wall supports the raised garden.
Cladding|ˈklædɪŋ|An outer layer applied to a building for protection or appearance.|The extension has timber cladding.|siding (US, for many exterior wall coverings)
Paving stone|ˈpeɪvɪŋ stoʊn|A flat unit used to form a paved surface.|The patio is laid with pale paving stones.|paver
Hose|hoʊz|A flexible tube used to convey water or another fluid.|The garden hose is coiled beside the tap.
Sprinkler|ˈsprɪŋklər|A device that sprays water over an area.|The lawn sprinkler runs in the early morning.
Mailbox|ˈmeɪlbɑːks|A container or opening used for receiving mail.|The mailbox is near the front gate.
Pergola|ˈpɜːrɡələ|An outdoor structure with posts supporting an open framework overhead.|Climbing plants grow over the pergola.
@tools
Sandpaper|ˈsændpeɪpər|A sheet coated with abrasive particles used for smoothing or shaping surfaces.|The carpenter used fine sandpaper on the edge.
Clamp|klæmp|A device that holds objects firmly together or in position.|A clamp holds the boards while the adhesive sets.
Utility knife|juːˈtɪləti naɪf|A general-purpose cutting tool, often with a replaceable or retractable blade.|The utility knife has a replaceable blade.
Toolbox|ˈtuːlbɑːks|A portable container used to store and carry tools.|The plumber opened the toolbox.
Hammer|ˈhæmər|A hand tool with a weighted head used for striking, often to drive nails.|The carpenter placed the hammer on the workbench.
Screwdriver|ˈskruːdraɪvər|A tool used to turn screws.|This screw requires a flathead screwdriver.
Drill|drɪl|A tool that rotates a bit to make holes or drive fasteners.|The cordless drill is on the shelf.
Drill bit|drɪl bɪt|A cutting attachment used with a drill to make holes.|The drill bit is designed for masonry.
Saw|sɔː|A tool with a toothed cutting edge for cutting materials.|The carpenter cut the board with a saw.
Circular saw|ˈsɜːrkjələr sɔː|A powered saw with a rotating circular blade.|The circular saw has an adjustable cutting depth.
Tape measure|teɪp ˈmeʒər|A flexible marked strip used for measuring length.|I used a tape measure to check the room width.
Spirit level|ˈspɪrɪt ˈlevəl|A tool with a bubble vial used to check whether a surface is level or plumb.|The shelf is level according to the spirit level.|level; bubble level
Square|skwer|A tool used to mark or check right angles.|The carpenter checked the corner with a square.
Wrench|rentʃ|A tool used to grip and turn nuts, bolts, or fittings.|The adjustable wrench fits several nut sizes.|spanner (UK, for many types)
Pipe wrench|paɪp rentʃ|An adjustable wrench with toothed jaws used to grip round pipes and fittings.|The pipe wrench has a long handle.
Pliers|ˈplaɪərz|A gripping tool with two handles and a pair of pivoted jaws.|The electrician picked up the pliers.
Chisel|ˈtʃɪzəl|A tool with a sharp cutting edge used to shape wood, stone, or metal.|The chisel removed a thin layer of wood.
Trowel|ˈtraʊəl|A hand tool with a flat blade used to spread or shape mortar and similar materials.|The mason spread mortar with a trowel.
Putty knife|ˈpʌti naɪf|A flat-bladed tool used for applying fillers or scraping surfaces.|She used a putty knife to fill the small hole.
Paintbrush|ˈpeɪntbrʌʃ|A brush used to apply paint.|A small paintbrush is useful around the trim.
Paint roller|peɪnt ˈroʊlər|A rotating cylinder used to apply paint over broad surfaces.|The paint roller left an even coat on the wall.
Ladder|ˈlædər|A portable structure with rungs used for climbing.|The ladder is stored in the garage.
Wheelbarrow|ˈwiːlbæroʊ|A small cart with handles and usually one wheel for moving materials.|The wheelbarrow is full of gravel.
Nail|neɪl|A slender fastener usually driven into material with a hammer.|The loose floorboard was held by a nail.
Screw|skruː|A threaded fastener turned into material or a mating thread.|The hinge is secured with three screws.
Bolt|boʊlt|A threaded fastener commonly used with a nut to join parts.|A steel bolt secures the bracket.
Nut|nʌt|A threaded fastener that screws onto a bolt.|The nut is tightened against the washer.
Wall anchor|wɔːl ˈæŋkər|A fitting inserted into a wall to provide support for a screw or other fastener.|The shelf bracket uses a wall anchor.|wall plug (UK, for some types)
Plunger|ˈplʌndʒər|A tool with a rubber cup that uses pressure changes to help clear a blockage.|The plunger is stored beside the toilet.
Drain snake|dreɪn sneɪk|A flexible cable tool used to clear obstructions in drains.|The plumber brought a drain snake.|drain auger
@actions
Build|bɪld|To make a structure by putting materials or components together.|They plan to build a small extension.
Renovate|ˈrenəveɪt|To repair and improve an existing building or space.|We want to renovate the kitchen.
Remodel|ˌriːˈmɑːdəl|To change the form, layout, or design of a building or room.|They remodeled the ground floor into an open-plan space.
Demolish|dɪˈmɑːlɪʃ|To deliberately take down or destroy a structure.|The old shed was demolished.|tear down
Excavate|ˈekskəveɪt|To remove soil or rock to form an opening or prepare a site.|The crew excavated the area for the footings.
Pour concrete|pɔːr ˈkɑːnkriːt|To place fresh concrete into a prepared area or form.|The workers poured concrete for the patio.
Lay bricks|leɪ brɪks|To arrange bricks in position, usually with mortar.|The mason laid bricks along the marked line.
Lay tiles|leɪ taɪlz|To install tiles on a prepared surface.|The tiler laid tiles across the bathroom floor.
Install|ɪnˈstɔːl|To put equipment or a building component in place for use.|The plumber installed a new sink.
Measure|ˈmeʒər|To find a size, distance, or quantity using a scale or instrument.|Measure the doorway before ordering a new door.
Cut|kʌt|To divide or shape material using a cutting tool.|The board was cut to the required length.
Sand|sænd|To smooth or shape a surface with an abrasive material.|The carpenter sanded the rough edge.
Prime|praɪm|To apply a preparatory coating before painting or finishing.|The bare wood was primed before painting.
Paint|peɪnt|To cover a surface with paint.|We painted the office walls green.
Seal|siːl|To close a joint or opening to restrict the passage of air, water, or another substance.|The gap around the window was sealed.
Caulk|kɔːk|To fill a joint or gap with a flexible sealing compound.|The contractor caulked the joint around the tub.
Tighten|ˈtaɪtən|To make a connection or fastener more secure.|The mechanic tightened the loose nut.
Loosen|ˈluːsən|To make a connection or fastener less tight.|The plumber loosened the fitting.
Unclog|ˌʌnˈklɑːɡ|To remove a blockage from a drain or passage.|The plumber unclogged the kitchen drain.|unblock (UK)
Flush|flʌʃ|To send water through a fixture or pipe, often to carry waste away.|Press the button to flush the toilet.
Patch|pætʃ|To repair a small damaged area by filling or covering it.|The painter patched the hole in the wall.
Replace|rɪˈpleɪs|To remove something and put another item in its place.|The worn gasket was replaced.
@plans
Site plan|saɪt plæn|A drawing showing a building and other features in relation to the surrounding land.|The site plan shows the driveway and property boundaries.
Permit|ˈpɜːrmɪt|An official authorization for a regulated activity, such as certain building work.|The contractor checked whether the project required a permit.
Architect|ˈɑːrkɪtekt|A professional who designs buildings and may oversee aspects of their construction.|The architect designed the new extension.
Architecture|ˈɑːrkɪtektʃər|The art and practice of designing buildings and built spaces.|She studies residential architecture.
Floor plan|ˈflɔːr plæn|A drawing showing the layout of a building level as viewed from above.|The floor plan shows two bedrooms and a kitchen.
Blueprint|ˈbluːprɪnt|A detailed technical drawing or set of plans, historically reproduced in blue.|The builder reviewed the blueprints before starting.
Elevation|ˌelɪˈveɪʃən|An architectural drawing showing a vertical face of a building.|The front elevation shows the main entrance.
Section|ˈsekʃən|A drawing showing a structure as if it were cut through along a plane.|The section shows the floor and roof construction.
Layout|ˈleɪaʊt|The arrangement of rooms, equipment, or elements in a space.|The new layout provides more room for two desks.
Scale|skeɪl|The proportional relationship between a drawing or model and the real object.|The drawing is at a scale of one to fifty.
Dimension|dɪˈmenʃən|A measured size, such as length, width, or height.|The drawing lists every room dimension.
Width|wɪdθ|The measurement from one side of something to the other.|The room has a width of 2.3 meters.
Length|leŋθ|The measurement along the longer direction of an object or space.|The room is 2.9 meters in length.
Height|haɪt|The vertical measurement from bottom to top.|The window has a height of one meter.
Depth|depθ|The measurement from front to back, top to bottom, or surface inward, depending on context.|The desk has a depth of sixty centimeters.
Ceiling height|ˈsiːlɪŋ haɪt|The vertical distance from a finished floor to the ceiling.|The ceiling height is 2.4 meters.
Open-plan|ˈoʊpən plæn|Describing a large interior area with few or no dividing walls between uses.|The house has an open-plan living and dining area.
Extension|ɪkˈstenʃən|An addition that increases the size of an existing building.|The extension adds a bedroom at the back.
Setback|ˈsetbæk|The required or actual distance between a building and a boundary or reference line.|The site plan marks the front setback.
Specification|ˌspesɪfɪˈkeɪʃən|A written statement of required materials, qualities, or methods for a project.|The specification calls for double-glazed windows.
@problems
Leak|liːk|An unintended escape of liquid or gas through a hole or gap.|There is a leak beneath the kitchen sink.
Drip|drɪp|A small drop of liquid falling repeatedly from a surface or opening.|A steady drip is coming from the faucet.
Clog|klɑːɡ|A blockage that restricts or prevents flow.|A clog is slowing the bathroom drain.|blockage
Crack|kræk|A narrow break or split in a surface or material.|A fine crack runs across the plaster.
Damp|dæmp|Unwanted moisture in a material or building area.|There is a patch of damp near the ceiling.
Mold|moʊld|A fungus that can grow on damp surfaces.|Dark mold has appeared around the window.|mould (UK)
Condensation|ˌkɑːndenˈseɪʃən|Liquid droplets that form when water vapor cools on a surface.|Condensation forms on the cold window glass.
Rust|rʌst|A reddish-brown corrosion product that forms on iron or steel.|The old steel gate is covered in rust.
Peeling paint|ˈpiːlɪŋ peɪnt|Paint that is lifting or coming away from a surface.|There is peeling paint around the door frame.
Burst pipe|bɜːrst paɪp|A pipe that has broken open and is releasing its contents.|A burst pipe flooded the utility room.
Running toilet|ˈrʌnɪŋ ˈtɔɪlət|A toilet in which water continues flowing when it should have stopped.|The running toilet makes a constant hissing sound.
Power outage|ˈpaʊər ˈaʊtɪdʒ|A temporary loss of the electrical power supply.|The lights went out during the power outage.|power cut (UK)
Short circuit|ʃɔːrt ˈsɜːrkɪt|An unintended low-resistance electrical path that can produce excessive current.|A damaged cable caused a short circuit.
Draft|dræft|An unwanted current of air entering a room.|I can feel a draft around the window.|draught (UK)
Sagging|ˈsæɡɪŋ|Hanging or bending downward below the intended position.|The sagging shelf is overloaded with books.
Uneven floor|ʌnˈiːvən flɔːr|A floor surface that is not consistently level or flat.|The chair rocks on the uneven floor.
@climate
Air conditioner|er kənˈdɪʃənər|Equipment that cools indoor air and often removes moisture from it.|The air conditioner is mounted above the door.
Thermostat|ˈθɜːrməstæt|A control that regulates heating or cooling according to temperature.|The thermostat is set to twenty-three degrees.
Radiator|ˈreɪdieɪtər|A heating device that transfers heat into a room.|The radiator is beneath the window.
Furnace|ˈfɜːrnɪs|A heating appliance that produces heat, often distributed through air ducts.|The furnace supplies warm air to the house.
Heat pump|hiːt pʌmp|A system that transfers heat between locations for heating or cooling.|The heat pump can heat the home in winter.
Air duct|er dʌkt|A passage that carries air through a ventilation or heating system.|The air duct runs above the ceiling.
Air vent|er vent|An opening through which air enters or leaves a space.|The air vent is near the top of the wall.
Extractor fan|ɪkˈstræktər fæn|A fan that removes indoor air, moisture, or odors.|The bathroom extractor fan is running.|exhaust fan (US)
Air filter|er ˈfɪltər|A component that removes particles from air passing through it.|The air filter is behind the unit's cover.
Ventilation|ˌventɪˈleɪʃən|The movement or replacement of air in an enclosed space.|The room needs better ventilation.
Humidity|hjuːˈmɪdəti|The amount of water vapor in the air.|The humidity is high after a hot shower.
Dehumidifier|ˌdiːhjuːˈmɪdəfaɪər|An appliance that removes moisture from indoor air.|The dehumidifier collects water in a removable tank.
Fireplace|ˈfaɪərpleɪs|A built structure or appliance in which a fire is used for heating or decoration.|The fireplace is the focal point of the living room.
Underfloor heating|ˌʌndərflɔːr ˈhiːtɪŋ|A system that warms a room through heating elements or pipes beneath the floor.|The bathroom has underfloor heating.
@safety
Construction site|kənˈstrʌkʃən saɪt|A location where building work is taking place.|Deliveries arrive at the construction site each morning.|building site (UK)
Contractor|ˈkɑːntræktər|A person or company engaged to carry out construction or other work.|The contractor arranged the delivery of materials.
Carpenter|ˈkɑːrpəntər|A skilled worker who makes or repairs wooden structures and fittings.|The carpenter built the staircase.
Mason|ˈmeɪsən|A skilled worker who builds with brick, stone, or concrete units.|The mason repaired the brick wall.
Plumber|ˈplʌmər|A worker who installs or repairs pipes, fixtures, and related systems.|The plumber repaired the leaking valve.
Electrician|ɪˌlekˈtrɪʃən|A worker who installs or repairs electrical systems.|The electrician inspected the lighting circuit.
Roofer|ˈruːfər|A worker who installs and repairs roofs.|The roofer replaced the damaged tiles.
Scaffolding|ˈskæfəldɪŋ|A temporary structure that supports workers and materials during construction.|Scaffolding surrounds the front of the building.
Hard hat|hɑːrd hæt|A protective helmet worn to reduce head injury from certain impacts.|The visitors wore hard hats on the site.
Safety goggles|ˈseɪfti ˈɡɑːɡəlz|Close-fitting protective eyewear that shields the eyes from hazards.|The worker put on safety goggles.
Work gloves|wɜːrk ɡlʌvz|Protective gloves selected for a work task.|The work gloves are beside the toolbox.
Safety boots|ˈseɪfti buːts|Protective footwear designed for workplace hazards.|The crew wore safety boots.
Dust mask|dʌst mæsk|A face covering designed to reduce inhalation of certain airborne particles.|The painter selected a dust mask for the sanding task.
Blueprint review|ˈbluːprɪnt rɪˈvjuː|An examination of construction drawings to understand or check the planned work.|The team held a blueprint review before the site meeting.
`;
let category='';const words=[];
for(const line of raw.trim().split('\n')){if(line.startsWith('@')){category=line.slice(1);continue;}if(!line.trim())continue;const [term,ipa,definition,example,aliases='']=line.split('|');let id=term.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');if(words.some(w=>w.id===id))id+='-'+category;words.push({id,term,ipa,definition,example,aliases,category});}
const notes={
'plumbing':'The “b” in plumbing and plumber is silent.',
'plumber':'Say “PLUM-er.” The “b” is silent.',
'concrete':'Cement is a binder. Concrete is the mixture made with cement, water, and aggregates.',
'cement':'Cement and concrete are different materials: cement is one ingredient in concrete.',
'ceiling':'A ceiling is the overhead surface inside a room. A roof is the outer covering of the building.',
'roof':'A roof is outside; a ceiling is the overhead surface inside a room.',
'joint-compound':'Joint compound is commonly used for drywall seams. Spackle is commonly used for small repairs.',
'floor':'Floor can mean the surface you walk on or an entire level. US “first floor” is usually UK “ground floor.”',
'facade':'Also spelled “façade.” The stress falls on the second syllable: fə-SAHD.',
'current':'In electrical vocabulary, current means flowing electric charge, measured in amperes.',
'washer':'Here, washer means a small mechanical part. A washing machine is a different kind of washer.',
'sand-actions':'Sand is a verb here. As a noun, sand is a material made of tiny rock grains.'
};
for(const w of words)if(notes[w.id])w.note=notes[w.id];
window.BUILDING_DATA={categories,words};
})();
